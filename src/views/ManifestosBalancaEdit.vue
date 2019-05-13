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
            <v-form v-model="valid" @submit.prevent="" ref="form">
              <v-container>
                <v-layout
                  row
                  wrap
                >
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.balanca_data_entrada"
                      mask="##/##/####"
                      placeholder="dd/mm/aaaa"
                      label="Data Entrada"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.balanca_hora_entrada"
                      mask="##:##"
                      placeholder="HH:mm"
                      label="Hora Entrada"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.balanca_data_saida"
                      mask="##/##/####"
                      placeholder="dd/mm/aaaa"
                      label="Data Saida"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.balanca_hora_saida"
                      mask="##:##"
                      placeholder="HH:mm"
                      label="Hora Saida"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout
                  row
                  wrap
                >
                  <v-flex
                      xs12
                      md2
                    >
                    <v-select
                      v-model="formFields.balanca_unidade"
                      :items="residuoUnidadesOptions"
                      :loading="residuoUnidadesOptionsLoad"
                      label="Unidade"
                      item-text="descricao"
                      item-value="descricao"                  
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <custom-decimal-field
                      v-model.lazy="formFields.balanca_peso_entrada"
                      label="Peso Entrada"
                      :precision="3"
                      :suffix="formFields.balanca_unidade"
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <custom-decimal-field
                      v-model.lazy="formFields.balanca_peso_saida"
                      label="Peso Saída"
                      :precision="3"
                      :suffix="formFields.balanca_unidade"
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.balanca_peso_calculado"
                      disabled
                      label="Peso Calculado"
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
import { ManifestosController } from "../controllers/ManifestosController";
import { ResiduoUnidadesController } from "../controllers/ResiduoUnidadesController";

import CustomDecimalField from '../components/shared/CustomDecimalField/CustomDecimalField'
import { mapMutations } from "vuex";

export default {
  components: {
    CustomDecimalField
  },
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

      residuoUnidadesOptions:null,
      residuoUnidadesOptionsLoad: false,
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async loadEntity() {
      this.SHOW_LOADER()

      let manifestosController = new ManifestosController()
      let result = await manifestosController.getBalanca(this.getID())

      this.CLOSE_LOADER()

      if (!result.error){
        this.formFields = result.data
        this.dataLoaded = true
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        });

        this.$router.push({ path: "/manifestos" });
      }
    },

    getID () {
      return this.$route.params.id
    },

    async save() {
      if (this.valid) {
        this.loading = true;

        let manifestosController = new ManifestosController();
        let result = await manifestosController.updateBlanca(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },

    async loadResiduoUnidades() {
      this.residuoUnidadesOptionsLoad = true

      let residuoUnidadesController = new ResiduoUnidadesController()
      let result = await residuoUnidadesController.all()

      this.residuoUnidadesOptions = result.data

      this.residuoUnidadesOptionsLoad = false
    },

    setPesoCalculado() {
      this.formFields.balanca_peso_calculado = this.formFields.balanca_peso_entrada - this.formFields.balanca_peso_saida
    },
  },

  watch: {
    'formFields.balanca_peso_entrada': function () {
      this.setPesoCalculado()
    },

    'formFields.balanca_peso_saida': function () {
      this.setPesoCalculado()
    },
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL('/manifestos')
    await this.loadEntity()
    this.loadResiduoUnidades()
  }
};
</script>