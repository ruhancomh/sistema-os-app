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
            <v-form v-model="valid" @submit.prevent="" ref="form">
              <v-container>
                <v-layout>
                  <v-flex
                    xs12
                    md6
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
                      v-model="formFields.funcionario_cargos_id"
                      :items="funcionarioCargosOptions"
                      :rules="[formRules.default.required]"
                      :loading="funcionarioCargosOptionsLoad"
                      label="Cargo"
                      item-text="descricao"
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
import { FuncionariosController } from "../controllers/FuncionariosController";
import { FuncionarioCargosController } from "../controllers/FuncionarioCargosController";

import { mapMutations } from "vuex";

export default {
  data() {
    return {
      loading: false,
      valid: false,
      formFields: {
        nome: "",
        funcionario_cargos_id: null
      },
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },

      funcionarioCargosOptions:[],
      funcionarioCargosOptionsLoad: false
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL"]),

    async save() {
      if (this.valid) {
        this.loading = true;

        let funcionariosController = new FuncionariosController();
        let result = await funcionariosController.create(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        if (!result.error)
          this.$router.push({ path: "/funcionarios" });

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },

    async loadFuncionarioCargos() {
      this.funcionarioCargosOptionsLoad = true

      let funcionarioCargosController = new FuncionarioCargosController()
      let result = await funcionarioCargosController.all()

      this.funcionarioCargosOptions = result.data.data

      this.funcionarioCargosOptionsLoad = false
    }
  },

  mounted() {
    this.SET_TOOLBAR_BACK_URL('/funcionarios')
    this.loadFuncionarioCargos()
  }
};
</script>