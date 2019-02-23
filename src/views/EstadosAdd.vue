<template>
  <v-container
    fluid
    fill-height
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
            <v-form v-model="valid">
              <v-container>
                <v-layout>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-text-field
                      v-model="formFields.nome"
                      :rules="[formRules.default.required]"
                      label="Nome"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs6
                    md2
                  >
                    <v-text-field
                      v-model="formFields.uf"
                      :rules="[formRules.default.required]"
                      :counter="2"
                      label="UF"
                      maxlength="2"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn
              color="primary"
              flat
              large
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
import { EstadoController } from "../controllers/EstadoController";

import { mapMutations } from "vuex";

export default {
  data() {
    return {
      valid: false,
      formFields: {
        nome: "",
        uf: ""
      },
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      }
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT"]),

    async save() {
      if (this.valid) {
        let estadoController = new EstadoController();
        let result = await estadoController.create({
          nome: this.formFields.nome,
          uf: this.formFields.uf
        });

        this.SHOW_ALERT({
          type: result.erro ? "error" : "success",
          message: result.message
        });

        this.$router.push({ path: "/estados" });
      }
    }
  }
};
</script>