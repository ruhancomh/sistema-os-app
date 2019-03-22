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
                    <custom-decimal-field
                      v-model="formFields.km_inicial"
                      label="KM Inicial"
                      suffix="Km"
                      :precision="3"
                    />
                  </v-flex> 
                  <v-flex
                    xs12
                    md2
                  >
                    <custom-decimal-field
                      v-model="formFields.km_final"
                      label="KM Final"
                      suffix="Km"
                      :precision="3"
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.hora_inicio"
                      mask="##:##"
                      placeholder="HH:mm"
                      label="Hora de Início"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.hora_fim"
                      mask="##:##"
                      placeholder="HH:mm"
                      label="Hora de Término"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-text-field
                      v-model="formFields.nota_fiscal_numero"
                      label="Nº Nota Fiscal"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-textarea
                      v-model="formFields.comentarios"
                      label="Comentários"
                      rows="1"
                      auto-grow
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
import { OrdensServicoController } from "../controllers/OrdensServicoController";

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
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async loadEntity() {
      this.SHOW_LOADER()

      let ordensServicoController = new OrdensServicoController()
      let result = await ordensServicoController.getPosExecucao(this.getID())

      this.CLOSE_LOADER()

      if (!result.error){
        this.formFields = result.data
        this.dataLoaded = true
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        });

        this.$router.push({ path: "/ordens-servico" });
      }
    },

    getID () {
      return this.$route.params.id
    },

    async save() {
      if (this.valid) {
        this.loading = true;

        let ordensServicoController = new OrdensServicoController();
        let result = await ordensServicoController.updatePosExecucao(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL('/ordens-servico')
    await this.loadEntity()
  }
};
</script>