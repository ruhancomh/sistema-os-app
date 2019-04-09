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
              <v-subheader>Dados do Serviço</v-subheader>
              <v-container>
                <v-layout row wrap>
                  <v-flex
                    xs12
                  >
                    <v-text-field
                      v-model="formFields.servico.descricao"
                      label="Serviço"
                      disabled
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <custom-decimal-field
                      v-model="formFields.ordem_servico_servicos_valor_unitario"
                      label="Valor Unit."
                      prefix="R$"
                      disabled
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.ordem_servico_servicos_quantidade"
                      label="Quantidade"
                      disabled=""
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <custom-decimal-field
                      v-model="formFields.ordem_servico_servicos_valor_total"
                      label="Valor Total"
                      prefix="R$"
                      disabled
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-textarea
                      v-model="formFields.ordem_servico_servicos_observacao"
                      label="Observações do serviço"
                      rows="1"
                      auto-grow
                      disabled
                    />
                  </v-flex>
                </v-layout>
              </v-container>
              <v-divider />
              <v-subheader>Dados da O.S</v-subheader>
              <v-container>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.ordem_servico.data_criacao"
                      label="Data da O.S"
                      disabled
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.ordem_servico.codigo_os"
                      label="Numero da O.S"
                      disabled
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-textarea
                      v-model="formFields.ordem_servico.servico_observacao"
                      label="Observações"
                      rows="1"
                      auto-grow
                      disabled
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-textarea
                      :value="formFields.ordem_servico.gerador.cliente.razao_social + ' | ' + formFields.ordem_servico.gerador.descricao + ' | ' + formFields.ordem_servico.gerador.cnpj"
                      label="Local de coleta"
                      rows="1"
                      auto-grow
                      disabled
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-textarea
                      :value="formFields.ordem_servico.receptor.razao_social + ' | ' + formFields.ordem_servico.receptor.cnpj"
                      label="Local de destino"
                      rows="1"
                      auto-grow
                      disabled
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-text-field
                      v-model="formFields.ordem_servico.equipamento.descricao"
                      label="Equipamento"
                      disabled
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-text-field
                      v-model="formFields.ordem_servico.veiculo.placa"
                      label="Placa"
                      disabled
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-text-field
                      v-model="formFields.ordem_servico.motorista.nome"
                      label="Motorista"
                      disabled
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="formFields.ordem_servico.residuo.grupo"
                      label="Resíduo"
                      disabled
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>

              <v-container>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-textarea
                      v-model="formFields.observacao"
                      label="Observações do serviço faturado"
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
import { FaturamentoServicosController } from "../controllers/FaturamentoServicosController";

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
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async loadEntity() {
      this.SHOW_LOADER()

      let faturamentoServicosController = new FaturamentoServicosController()
      let result = await faturamentoServicosController.get(this.getID(), this.getFaturamentoId())

      this.CLOSE_LOADER()

      if (!result.error){
        this.formFields = result.data
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        });

        this.$router.push({ path: `/faturamentos/editar/${this.getFaturamentoId()}/servicos` });
      }
    },

    async save() {
      if (this.valid) {
        this.loading = true;

        let faturamentoServicosController = new FaturamentoServicosController();
        let result = await faturamentoServicosController.update(this.formFields,this.getID());

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },

    getID () {
      return this.$route.params.faturamento_servicos_id
    },

    getFaturamentoId () {
      return this.$route.params.id
    },

  },

  async created() {
    this.SET_TOOLBAR_BACK_URL(`/faturamentos/editar/${this.getFaturamentoId()}/servicos`)
    await this.loadEntity()
  }
};
</script>