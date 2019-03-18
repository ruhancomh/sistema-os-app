<template>
  <div class="cliente-enderecos-select">
    <v-autocomplete
      v-model="inputValue"
      :label="label"
      :items="options"
      :loading="optionsLoad"
      :search-input.sync="optionsSearch"
      item-value="id"
      :autocomplete="true"
      :hint="hint"
      no-filter
      clearable
      persistent-hint
      hide-no-data

      :rules="rules"
      :required="required"
    >
      <template v-slot:selection="{ item, selected }">
        <v-list-tile
          :selected="selected"
        >
          <v-list-tile-content>
            <v-list-tile-title v-html="item.cliente.razao_social"></v-list-tile-title>
            <v-list-tile-sub-title v-html="getItemSubtitle(item)"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <template v-slot:item="data">
        <v-list-tile-content>
          <v-list-tile-title v-html="data.item.cliente.razao_social"></v-list-tile-title>
          <v-list-tile-sub-title v-html="getItemSubtitle(data.item)"></v-list-tile-sub-title>
        </v-list-tile-content>
      </template>
      <template v-slot:no-data>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              Nenhum resultado encontrado, confira os termos da busca
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
import { debounce } from "debounce";
import { ClienteEnderecosController } from "../../../controllers/ClienteEnderecosController";

export default {
  props: {
    value: {
      required: true
    },
    label: {
      type: String,
      default: ''
    },

    hint: {
      type: String,
      default: 'Digite a razão social ou cnpj do cliente para fazer a busca'
    },

    rules : {
      type: Array,
      default: () => []
    },

    required: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      inputValue: null,
      options:[],
      optionsLoad: false,
      optionsSearch: '',
      preLoaded: false
    }
  },

  methods: {
    async load() {
      this.optionsLoad = true

      let controller = new ClienteEnderecosController()
      let result = await controller.list({search: this.optionsSearch})

      this.options = result.data.data

      this.optionsLoad = false
    },

    async preload(id) {
      window.console.log('rodando preload')
      this.optionsLoad = true

      if (id) {
        let controller = new ClienteEnderecosController()
        let result = await controller.get(false,id)

        if (!result.error){
          this.options.push(result.data)
        }
      }

      this.optionsLoad = false
    },

    getItemSubtitle(item) {
      let descricao = item.descricao ? ` | ${item.descricao}` : ''
      
      return `CNPJ: ${item.cnpj}${descricao}`
    }
  },

  watch: {
    optionsSearch: debounce(function (nv) {
      if(nv) {
        this.load(nv)
      } else {
        // this.options = []
      }
    },500),

    inputValue (nv) {
      this.$emit('input', nv)
    },

    value (nv) {
      window.console.log('value',nv)
      window.console.log('input', this.inputValue)
      if(nv && !this.inputValue){
        this.preload(nv)
      }

      this.inputValue = nv
    },
  },

  created () {
    window.console.log(this.value)
  }
}
</script>

<style lang="scss" scoped>

  .custom-list-item{
    position: relative;
    width: 100%;

    .header{
      position: relative;
      font-size: 14px;
      line-height: 1.3;
      color: #444;
    }
    .content{
      text-align: left;
      .content-header {
        width: 100%;
        position: relative;
        font-size: 13px;
        line-height: 1.3;
        color: #333;
        font-weight: bold;
        margin-top: 5px;
      }
      .content-text {
        width: 100%;
        position: relative;
        font-size: 13px;
        line-height: 1.3;
        padding-left: 5px;
        color: #444;
        .content-item{
          margin-top: 3px;
        }
      }
    }
}
</style>
