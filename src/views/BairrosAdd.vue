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
                    md4
                  >
                    <v-text-field
                      v-model="formFields.nome"
                      :rules="[formRules.default.required]"
                      label="Nome"
                      required
                      validate-on-blur
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
                      :autofocus="true"
                      required                     
                    />
                  </v-flex>
                  <v-flex
                    xs6
                    md4
                  >
                    <v-select
                      v-model="formFields.cidades_id"
                      :items="cidadesOptions"
                      :rules="[formRules.default.required]"
                      label="Cidade"
                      item-text="nome"
                      item-value="id"
                      :loading="cidadesOptionsLoading"
                      :autofocus="true"
                      no-data-text="Selecione um estado"
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
import { BairrosController } from "../controllers/BairrosController";
import { CidadesController } from "../controllers/CidadesController";
import { EstadosController } from "../controllers/EstadosController";

import { mapMutations } from "vuex";

export default {
  data() {
    return {
      loading: false,
      valid: false,
      formFields: {
        nome: "",
        estados_id: "",
        cidades_id: ""
      },
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },
      estadosOptions: [],
      cidadesOptions: [],
      cidadesOptionsLoading:false
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT", "SET_TOOLBAR_BACK_URL"]),

    async save() {
      if (this.valid) {
        this.loading = true

        let bairrosController = new BairrosController();
        let result = await bairrosController.create(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        this.loading = false

        if (!result.error)
          this.$router.push({ path: "/bairros" });
      } else {
        this.$refs.form.validate()
      }
    },

    async loadEstados() {
      let estadoController = new EstadosController()
      let result = await estadoController.all()

      this.estadosOptions = result.data.data
    },

    async loadCidades(estados_id) {
      this.cidadesOptionsLoading = true
      let cidadesController = new CidadesController()
      let result = await cidadesController.listAllByEstado(estados_id)
      this.cidadesOptions = result.data.data
      this.cidadesOptionsLoading = false
    }
  },

  watch: {
    'formFields.estados_id': function () {
      this.loadCidades(this.formFields.estados_id)
    }
  },

  created() {
    this.SET_TOOLBAR_BACK_URL('/bairros')
    
    this.loadEstados()
  }
};
</script>