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
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="formFields.grupo"
                      label="Grupo"
                      :rules="[formRules.default.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="formFields.descricao"
                      label="Descrição"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.codigo"
                      label="Código"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.onu"
                      label="ONU"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-select
                      v-model="formFields.residuo_classes_id"
                      :items="classesOptions"
                      :loading="classesOptionsLoad"
                      label="Classe"
                      item-text="descricao"
                      item-value="id"                    
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-select
                      v-model="formFields.residuo_tratamentos_id"
                      :items="tratamentosOptions"
                      :loading="tratamentosOptionsLoad"
                      label="Tratamento"
                      item-text="descricao"
                      item-value="id"                    
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
import { ResiduosController } from "../controllers/ResiduosController";
import { ResiduoClassesController } from '../controllers/ResiduoClassesController';
import { ResiduoTratamentosController } from '../controllers/ResiduoTratamentosController';

import { mapMutations } from "vuex";

export default {
  data() {
    return {
      loading: false,
      valid: false,
      formFields:{},
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },

      classesOptions:[],
      classesOptionsLoad: false,

      tratamentosOptions:[],
      tratamentosOptionsLoad: false,
    };
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

      let residuosController = new ResiduosController()
      let result = await residuosController.get(this.getEntityID())

      this.CLOSE_LOADER()

      if (!result.error){
        this.formFields = result.data
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        });

        this.$router.push({ path: `/residuos/` });
      }
    },

    async save() {
      if (this.valid) {
        this.loading = true;

        let residuosController = new ResiduosController();
        let result = await residuosController.update(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        this.loading = false
      }
    },

    async loadClasses(residuo_classes_id) {
      this.classesOptionsLoad = true

      let residuoClassesController = new ResiduoClassesController()
      let result = await residuoClassesController.all()

      this.classesOptions = result.data.data

      if(!residuo_classes_id){
        this.formFields.residuo_classes_id = null
      } else {
        this.formFields.residuo_classes_id = residuo_classes_id
      }

      this.classesOptionsLoad = false
    },

    async loadTratamentos(residuo_tratamentos_id) {
      this.tratamentosOptionsLoad = true

      let residuoTratamentosController = new ResiduoTratamentosController()
      let result = await residuoTratamentosController.all()

      this.tratamentosOptions = result.data.data

      if(!residuo_tratamentos_id){
        this.formFields.residuo_tratamentos_id = null
      } else {
        this.formFields.residuo_tratamentos_id = residuo_tratamentos_id
      }

      this.tratamentosOptionsLoad = false
    },

    getEntityID() {
      return this.$route.params.id
    }

  },

  async created() {
    this.SET_TOOLBAR_BACK_URL('/residuos')
    await this.loadEntity()
    this.loadTratamentos(this.formFields.residuo_tratamentos_id)
    this.loadClasses(this.formFields.residuo_classes_id)
  }
};
</script>