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
            <v-form v-model="valid" @submit.prevent="">
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
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async loadEntity() {
      this.SHOW_LOADER()

      let funcionariosController = new FuncionariosController()
      let result = await funcionariosController.get(this.$route.params.id)

      this.CLOSE_LOADER()

      if (!result.error){
        this.formFields = result.data
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        });

        this.$router.push({ path: "/bairros" });
      }
    },

    async save() {
      if (this.valid) {
        this.loading = true;

        let funcionariosController = new FuncionariosController();
        let result = await funcionariosController.update(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        this.loading = false
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

  async mounted() {
    this.SET_TOOLBAR_BACK_URL('/funcionarios')
    await this.loadEntity()
    this.loadFuncionarioCargos()
  }
};
</script>