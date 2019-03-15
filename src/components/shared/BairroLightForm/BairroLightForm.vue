<template>
  <v-light-form
    ref="lightForm"
    title="Adicionar bairro"
    :loading="loading"
    :rules="{required:formRules.default.required}"
    :required-data-empty="isRequiredDataEmpty"
    :required-data-empty-text="'Selecione uma <b>Cidade</b> para adicionar um novo bairro.'"
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
import { BairrosController } from '../../../controllers/BairrosController';

export default {
  components:{
    VLightForm
  },
  props: {
    cidadesId: {
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
    }
  },
  computed: {
    isRequiredDataEmpty () {
      return this.cidadesId ? false : true
    }
  },
  methods: {
    ...mapMutations([
      "SHOW_ALERT",
    ]),

    async save(fields) {
      this.loading = true

      fields['cidades_id'] = this.cidadesId

      let bairrosController = new BairrosController()
      let result = await bairrosController.create(fields)

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