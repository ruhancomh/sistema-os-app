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
                    md6
                  >
                    <v-text-field
                      v-model="formFields.nome"
                      label="Nome"
                      :rules="[formRules.default.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="formFields.email"
                      label="E-mail"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.cargo"
                      label="Cargo"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.telefone"
                      label="Telefone"
                      return-masked-value
                      mask="(##) ##########"
                    ></v-text-field>
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
import { TransportadorContatosController } from "../controllers/TransportadorContatosController"

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
      }
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

      let transportadorContatosController = new TransportadorContatosController()
      let result = await transportadorContatosController.get(this.getEntityID(), this.getTransportadorID())

      this.CLOSE_LOADER()

      if (!result.error) {
        this.formFields = result.data
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        })

        this.$router.push({ path: `/transportadores/editar/${this.getTransportadorID()}/contatos` })
      }
    },

    async save() {
      if (this.valid) {
        this.loading = true

        let transportadorContatosController = new TransportadorContatosController()
        let result = await transportadorContatosController.update(this.formFields,this.getTransportadorID())

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        })

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },

    getTransportadorID() {
      return this.$route.params.id
    },

    getEntityID() {
      return this.$route.params.transportador_contatos_id
    }
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL(`/transportadores/editar/${this.getTransportadorID()}/contatos`)
    await this.loadEntity()
  }
}
</script>