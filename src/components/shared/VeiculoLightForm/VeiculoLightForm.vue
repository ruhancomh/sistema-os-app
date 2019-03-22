<template>
  <v-light-form
    ref="lightForm"
    title="Adicionar veículo"
    tooltip-text="Adicionar novo veículo"
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
          v-model="props.fields.descricao"
          :rules="[props.rules.required]"
          label="Descrição"
        ></v-text-field>
      </v-flex>
      <v-flex
        xs12
      >
        <v-text-field
          v-model="props.fields.placa"
          :rules="[props.rules.required]"
          label="Placa"
        ></v-text-field>
      </v-flex>
    </template>
  </v-light-form>
</template>

<script>
import { mapMutations } from "vuex"
import VLightForm from "../VLightForm/VLightForm"
import { VeiculosController } from '../../../controllers/VeiculosController';

export default {
  components:{
    VLightForm
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

      let veiculosController = new VeiculosController()
      let result = await veiculosController.create(fields)

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