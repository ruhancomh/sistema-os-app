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
                    md3
                  >
                    <v-select
                      v-model="formFields.estados_id"
                      :items="estadosOptions"
                      :rules="[formRules.default.required]"
                      label="Estado"
                      item-text="nome"
                      item-value="id"
                      required                      
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
import { CidadesController } from "../controllers/CidadesController";
import { EstadosController } from "../controllers/EstadosController";

import { mapMutations } from "vuex";

export default {
  data() {
    return {
      valid: false,
      formFields: {
        nome: "",
        estados_id: ""
      },
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },
      estadosOptions: []
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT"]),

    async save() {
      if (this.valid) {
        let cidadesController = new CidadesController();
        let result = await cidadesController.create(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        if (!result.error)
          this.$router.push({ path: "/cidades" });
      }
    },

    async loadEstados() {
      let estadoController = new EstadosController()
      let result = await estadoController.all()

      this.estadosOptions = result.data.data
    }
  },

  mounted() {
    this.loadEstados()
  }
};
</script>