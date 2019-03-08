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
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs6
                    md3
                  >
                    <v-select
                      v-model="estados_id"
                      :items="estadosOptions"
                      :rules="[formRules.default.required]"
                      label="Estado"
                      item-text="nome"
                      item-value="id"
                      :autofocus="true"
                      :loading="estadosOptionsLoading"
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
      loading:false,
      valid: false,
      formFields: {
        nome: "",
        cidades_id: ""
      },
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },
      estados_id: "",
      estadosOptions: [],
      estadosOptionsLoading:false,
      cidadesOptions: [],
      cidadesOptionsLoading:false
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async loadEntity() {
      this.SHOW_LOADER()

      let bairrosController = new BairrosController()
      let result = await bairrosController.get(this.$route.params.id)

      this.CLOSE_LOADER()

      if (!result.error){
        this.formFields = result.data
        this.estados_id = result.data.cidade.estado.id
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
        this.loading = true

        let bairrosController = new BairrosController();
        let result = await bairrosController.update(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },

    async loadEstados() {
      this.estadosOptionsLoading = true
      let estadoController = new EstadosController()
      let result = await estadoController.all()

      this.estadosOptions = result.data.data
      this.estadosOptionsLoading = false
    },

    async loadCidades(estados_id, cidades_id) {
      this.cidadesOptionsLoading = true
      let cidadesController = new CidadesController()
      let result = await cidadesController.listAllByEstado(estados_id)

      this.cidadesOptions = result.data.data

      if(!cidades_id){
        this.formFields.cidades_id = null
      }

      this.cidadesOptionsLoading = false
    }
  },

  watch: {
    estados_id: {
      handler (nv,ov){
        if(ov){
          this.loadCidades(this.estados_id)
        }
      },
      deep:true
    }
  },

  async mounted() {
    this.SET_TOOLBAR_BACK_URL('/bairros')
    await this.loadEntity()
    this.loadEstados()
    this.loadCidades(this.estados_id, this.formFields.cidades_id)
  }
};
</script>