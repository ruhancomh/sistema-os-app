<template>
  <v-light-form
    ref="lightForm"
    :title="config.lightFormTitle"
    :tooltip-text="config.lightFormTooltipText"
    :loading="loading"
    :rules="{required:formRules.default.required}"
    @confirm="save($event)"
  >
    <template
      slot="form"
      slot-scope="props"
    >
      <v-flex
        xs12
      >
        <v-text-field
          v-model="props.fields.nome"
          :rules="[props.rules.required]"
          label="Nome"
        ></v-text-field>
      </v-flex>  
    </template>
  </v-light-form>
</template>

<script>
import { mapMutations } from "vuex"
import VLightForm from "../VLightForm/VLightForm"
import { FuncionariosController } from '../../../controllers/FuncionariosController';

export default {
  components:{
    VLightForm
  },
  props: {
    cargo: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },
      configurations:[
        {
          code: 'MOTORISTA',
          defaultValue: 1,
          lightFormTitle: 'Adicionar motorista',
          lightFormTooltipText: 'Adicionar novo motorista'
        }
      ],
    }
  },
  computed: {
    isRequiredDataEmpty () {
      return this.cidadesId ? false : true
    },

    config() {
      return {
          code: 'MOTORISTA',
          cargoID: 1,
          lightFormTitle: 'Adicionar motorista',
          lightFormTooltipText: 'Adicionar novo motorista'
        }
      // let self = this
      // return this.config.find( item => {
      //   return item.code == self.cargo
      // })
    }
  },
  methods: {
    ...mapMutations([
      "SHOW_ALERT",
    ]),

    async save(fields) {
      this.loading = true

      fields.funcionario_cargos_id = this.config.cargoID

      let funcionariosController = new FuncionariosController()
      let result = await funcionariosController.create(fields)

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      })

      if (!result.error){
        this.$refs.lightForm.closeDialog()
        this.$emit('success', result.data)
      }

      this.loading = false
    },
  }
}
</script>