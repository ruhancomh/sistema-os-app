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
                    md3
                  >
                    <v-text-field
                      v-model="formFields.data"
                      mask="##/##/#### ##:##"
                      placeholder="dd/mm/aaaa hh:mm"
                      label="Data"
                      return-masked-value
                      :rules="[formRules.default.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs6
                    md4
                  >
                    <v-select
                      v-model="formFields.funcionarios_id"
                      :items="funcionariosOptions"
                      label="Funcionário"
                      item-text="nome"
                      item-value="id"
                    />
                  </v-flex>
                  <v-flex
                    xs6
                    md3
                  >
                    <v-select
                      v-model="formFields.conversa_acoes_id"
                      :items="acaoOptions"
                      :loading="acaoOptionsLoad"
                      label="Ação"
                      item-text="descricao"
                      item-value="id"
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-textarea
                      v-model="formFields.descricao"
                      label="Descrição da conversa"
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
import { FuncionariosController } from "../controllers/FuncionariosController"
import { ConversasController } from "../controllers/ConversasController"

import { mapMutations } from "vuex"
import { ConversaAcoesController } from '../controllers/ConversaAcoesController'

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

      acaoOptions: [],
      acaoOptionsLoad: false,

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

    async save() {
      if (this.valid) {
        this.loading = true

        let conversasController = new ConversasController()
        let result = await conversasController.create(this.formFields)

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        })

        if (!result.error)
          this.$router.push({
            path: `/clientes/editar/${this.getClienteID()}/conversas`
          })

        this.loading = false
      }
    },

    async loadFuncionarios() {
      this.funcionariosOptionsLoad = true

      let funcionarioController = new FuncionariosController()
      let result = await funcionarioController.all()

      this.funcionariosOptions = result.data.data

      this.funcionariosOptionsLoad = false
    },

    async loadAcoes() {
      this.acaoOptionsLoad = true

      let conversaAcoesController = new ConversaAcoesController()
      let result = await conversaAcoesController.all()

      this.acaoOptions = result.data.data

      this.acaoOptionsLoad = false
    },

    getClienteID() {
      return this.$route.params.id
    }
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL(`/clientes/editar/${this.getClienteID()}/conversas`)
    this.formFields = new ConversasController().getModel()
    this.formFields.clientes_id = this.getClienteID()
    this.loadFuncionarios()
    this.loadAcoes()
  }
}
</script>