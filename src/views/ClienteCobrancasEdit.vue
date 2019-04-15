<template>
  <v-container
    fluid
    fill-height
    style="padding:0px"
  >
    <v-layout
      justify-center
      align-center
    >
      <v-flex>
        <v-card
          color="white"
          width="100%"
        >
          <v-card-text>
            <v-form
              v-model="valid"
              @submit.prevent=""
              ref="form"
            >
              <v-container>
                <v-layout
                  row
                  wrap
                >
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.data"
                      label="Data"
                      :rules="[formRules.default.required]"
                      required
                      return-masked-value
                      mask="##/##/####"
                      placeholder="dd/mm/aaaa"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <custom-decimal-field
                      v-model="formFields.valor"
                      label="Valor"
                      prefix="R$"
                      required
                      :rules="[formRules.default.required]"
                    />                    
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.referencia"
                      label="Referência Proposta"
                      :rules="[formRules.default.required]"
                      required
                    ></v-text-field>                    
                  </v-flex>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-layout>
                      <v-select
                        v-model="formFields.servicos_id"
                        :items="servicosOptions"
                        :loading="servicosOptionsLoad"
                        label="Serviço"
                        item-text="descricao"
                        item-value="id"
                      />
                      <servico-light-form 
                        @success="servicoAddSuccess($event)"
                      />
                    </v-layout>
                  </v-flex>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-textarea
                      v-model="formFields.observacao"
                      label="Observações"
                    />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              large
              :loading="loading"
              @click="save"
            >
              Salvar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { ClienteCobrancasController } from "../controllers/ClienteCobrancasController"
import ServicoLightForm from "../components/shared/ServicoLightForm/ServicoLightForm"

import { mapMutations } from "vuex"
import { ServicosController } from '../controllers/ServicosController';
import CustomDecimalField from '../components/shared/CustomDecimalField/CustomDecimalField'

export default {
  components: {
    CustomDecimalField,
    ServicoLightForm
  },
  data() {
    return {
      loading: false,
      valid: false,
      formFields: {},
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },
      servicosOptions: [],
      servicosOptionsLoad: false
    }
  },

  methods: {
    ...mapMutations([
      "SHOW_ALERT",
      "SET_TOOLBAR_BACK_URL",
      "SHOW_LOADER",
      "CLOSE_LOADER"
    ]),

    async loadEntity() {
      this.SHOW_LOADER()

      let clienteCobrancasController = new ClienteCobrancasController()
      let result = await clienteCobrancasController.get(this.getEntityID(), this.getClienteID())

      this.CLOSE_LOADER()

      if (!result.error) {
        this.formFields = result.data
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        })

        this.$router.push({ path: `/clientes/editar/${this.getClienteID()}/cobrancas` })
      }
    },

    async save() {
      if (this.valid) {
        this.loading = true

        let clienteCobrancasController = new ClienteCobrancasController()
        let result = await clienteCobrancasController.update(this.formFields, this.getClienteID())

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        })

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },

    async loadServicos() {
      this.servicosOptionsLoad = true

      let servicosController = new ServicosController()
      let result = await servicosController.all()

      this.servicosOptions = result.data.data

      this.servicosOptionsLoad = false
    },

    getClienteID() {
      return this.$route.params.id
    },

    getEntityID() {
      return this.$route.params.cliente_cobrancas_id
    },

    async servicoAddSuccess(servico) {
      await this.loadServicos()
      this.formFields.servicos_id = servico.id
    },
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL(`/clientes/editar/${this.getClienteID()}/cobrancas`)
    await this.loadEntity()
    this.loadServicos()
  }
}
</script>