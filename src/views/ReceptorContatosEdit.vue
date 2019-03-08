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
import { ReceptorContatosController } from "../controllers/ReceptorContatosController"

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

      let receptorContatosController = new ReceptorContatosController()
      let result = await receptorContatosController.get(this.getEntityID(), this.getReceptorID())

      this.CLOSE_LOADER()

      if (!result.error) {
        this.formFields = result.data
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        })

        this.$router.push({ path: `/receptores/editar/${this.getReceptorID()}/contatos` })
      }
    },

    async save() {
      if (this.valid) {
        this.loading = true

        let receptorContatosController = new ReceptorContatosController()
        let result = await receptorContatosController.update(this.formFields,this.getReceptorID())

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        })

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },

    getReceptorID() {
      return this.$route.params.id
    },

    getEntityID() {
      return this.$route.params.receptor_contatos_id
    }
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL(`/receptores/editar/${this.getReceptorID()}/contatos`)
    await this.loadEntity()
  }
}
</script>