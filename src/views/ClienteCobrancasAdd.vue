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
                    md3
                  >
                    <v-text-field
                      v-model="formFields.valor"
                      label="Valor"
                      :rules="[formRules.default.required]"
                      required
                    ></v-text-field>                    
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.referencia"
                      label="Referência"
                      :rules="[formRules.default.required]"
                      required
                    ></v-text-field>                    
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.porcentagem"
                      label="Porcentagem"
                      :rules="[formRules.default.required]"
                      required
                    ></v-text-field>                    
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

export default {
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

    async save() {
      if (this.valid) {
        this.loading = true

        let clienteCobrancasController = new ClienteCobrancasController()
        let result = await clienteCobrancasController.create(this.formFields)

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        })

        if (!result.error)
          this.$router.push({
            path: `/clientes/editar/${this.getClienteID()}/cobrancas`
          })

        this.loading = false
      }
    },

    async loadServicos() {
      // this.servicosOptionsLoad = true

      // let servicosController = new ServicosController()
      // let result = await servicosController.all()

      // this.servicosOptions = result.data.data

      // this.servicosOptionsLoad = false
    },

    getClienteID() {
      return this.$route.params.id
    }
  },

  created() {
    this.SET_TOOLBAR_BACK_URL(`/clientes/editar/${this.getClienteID()}/cobrancas`)
    this.formFields = new ClienteCobrancasController().getModel()
    this.formFields.clientes_id = this.getClienteID()
    this.loadServicos()
  }
}
</script>