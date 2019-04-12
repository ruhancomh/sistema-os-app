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
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.data_vencimento"
                      mask="##/##/####"
                      placeholder="dd/mm/aaaa"
                      label="Data vencimento"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.numero_nota"
                      label="Numero da nota"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.data_emissao_nota"
                      mask="##/##/####"
                      placeholder="dd/mm/aaaa"
                      label="Data de emissão da nota"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>           
                  <v-flex
                    xs12
                    md3
                  >
                    <custom-decimal-field
                      v-model="formFields.valor_pago"
                      label="Valor Nota Fiscal"
                      prefix="R$"
                    />                    
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.numero_documento"
                      label="Numero do Documento"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs6
                    md3
                  >
                    <v-select
                      v-model="formFields.empresa_fatura"
                      :items="empresaFaturaOptions"
                      :loading="empresaFaturaOptionsLoad"
                      label="Faturado por"
                      item-text="descricao"
                      item-value="id"                    
                    />
                  </v-flex>                
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-textarea
                      v-model="formFields.observacoes"
                      label="Observações"
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
import { FaturamentosController } from "../controllers/FaturamentosController";

import CustomDecimalField from '../components/shared/CustomDecimalField/CustomDecimalField'
import { mapMutations } from "vuex";

export default {
  components: {
    CustomDecimalField,
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

      empresaFaturaOptions:[],
      empresaFaturaOptionsLoad: false,

    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async loadEntity() {
      this.SHOW_LOADER()

      let faturamentosController = new FaturamentosController()
      let result = await faturamentosController.get(this.getID())

      this.CLOSE_LOADER()

      if (!result.error){
        this.formFields = result.data
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        });

        this.$router.push({ path: "/faturamentos" });
      }
    },

    getID () {
      return this.$route.params.id
    },

    async save() {
      if (this.valid) {
        this.loading = true;

        let faturamentosController = new FaturamentosController();
        let result = await faturamentosController.updateNotaFiscal(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },


    loadEmpresasFatura() {
      this.empresaFaturaOptionsLoad = true

      let funcionarioController = new FaturamentosController()
      let result = funcionarioController.listEmpresasFaturamento()

      this.empresaFaturaOptions = result.data

      this.empresaFaturaOptionsLoad = false
    },
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL('/faturamentos')
    await this.loadEntity()
    this.loadEmpresasFatura()
  }
};
</script>