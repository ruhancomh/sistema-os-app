<template>
  <v-light-form
    ref="lightForm"
    title="Ações de conversa"
    tooltip-text="Adicionar nova ação de conversa"
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
    </template>
  </v-light-form>
</template>

<script>
import { mapMutations } from "vuex"
import VLightForm from "../VLightForm/VLightForm"
import { ConversaAcoesController } from '../../../controllers/ConversaAcoesController';

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

      let conversaAcoesController = new ConversaAcoesController()
      let result = await conversaAcoesController.create(fields)

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