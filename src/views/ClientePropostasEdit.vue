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
                    md3
                  >
                    <v-switch
                      v-model="formFields.aprovado"
                      color="primary"
                      label="Proposta Aprovada?"
                    ></v-switch>
                  </v-flex>
                </v-layout>
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
                    <v-text-field
                      v-model="formFields.numero"
                      label="Numero"
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
                    xs6
                    md4
                  >
                    <v-select
                      v-model="formFields.funcionarios_id"
                      :items="funcionariosOptions"
                      :loading="funcionariosOptionsLoad"
                      label="Funcionário"
                      item-text="nome"
                      item-value="id"
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-textarea
                      v-model="formFields.referencia_1"
                      label="Referência 1"
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-textarea
                      v-model="formFields.referencia_2"
                      label="Referência 2"
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-textarea
                      v-model="formFields.referencia_3"
                      label="Referência 3"
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
import { ClientePropostasController } from "../controllers/ClientePropostasController"

import { mapMutations } from "vuex"
import { ServicosController } from '../controllers/ServicosController';
import { FuncionariosController } from '../controllers/FuncionariosController';

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
      servicosOptionsLoad: false,

      funcionariosOptions: [],
      funcionariosOptionsLoad: false
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

      let clientePropostasController = new ClientePropostasController()
      let result = await clientePropostasController.get(this.getEntityID(), this.getClienteID())

      this.CLOSE_LOADER()

      if (!result.error) {
        this.formFields = result.data
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        })

        this.$router.push({ path: `/clientes/editar/${this.getClienteID()}/propostas` })
      }
    },

    async save() {
      if (this.valid) {
        this.loading = true

        let clientePropostasController = new ClientePropostasController()
        let result = await clientePropostasController.update(this.formFields, this.getClienteID())

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        })

        if (!result.error)
          this.$router.push({
            path: `/clientes/editar/${this.getClienteID()}/propostas`
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

    async loadFuncionarios() {
      this.funcionariosOptionsLoad = true

      let funcionarioController = new FuncionariosController()
      let result = await funcionarioController.all()

      this.funcionariosOptions = result.data.data

      this.funcionariosOptionsLoad = false
    },

    getClienteID() {
      return this.$route.params.id
    },

    getEntityID() {
      return this.$route.params.cliente_propostas_id
    }
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL(`/clientes/editar/${this.getClienteID()}/propostas`)
    await this.loadEntity()
    this.loadServicos()
    this.loadFuncionarios()
  }
}
</script>