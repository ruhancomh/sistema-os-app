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
                    md2
                  >
                    <custom-decimal-field
                      v-model="formFields.porcentagem"
                      label="Porcentagem"
                      :rules="[formRules.default.required]"
                      required
                      suffix="%"
                    />                    
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.dia"
                      label="Dia"
                      :rules="[formRules.default.required]"
                      required
                      type="number"
                    ></v-text-field>                    
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.vencimento"
                      label="Vencimento"
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
                    <v-text-field
                      v-model="formFields.referencia"
                      label="Referência"
                      :rules="[formRules.default.required]"
                      required
                    ></v-text-field>                    
                  </v-flex>
                  <v-flex
                    xs6
                    md4
                  >
                    <v-select
                      v-model="formFields.servicos_id"
                      :items="servicosOptions"
                      :loading="servicosOptionsLoad"
                      label="Serviço"
                      item-text="descricao"
                      item-value="id"
                      :rules="[formRules.default.required]"
                      required
                    />
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

import { mapMutations } from "vuex"
import { ServicosController } from '../controllers/ServicosController';
import CustomDecimalField from '../components/shared/CustomDecimalField/CustomDecimalField'

export default {
  components: {
    CustomDecimalField
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
    }
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL(`/clientes/editar/${this.getClienteID()}/cobrancas`)
    await this.loadEntity()
    this.loadServicos()
  }
}
</script>