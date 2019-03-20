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
                    md5
                  >
                    <v-select
                      v-model="servicoToAdd"
                      :items="getClienteServicosOptions"
                      :loading="clienteServicosOptionsLoad"
                      label="Serviço"
                      item-text="servico.descricao"
                      item-value="id"                    
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                  <v-btn color="primary" fab small dark @click="addServico">
                    <v-icon>mdi-library-plus</v-icon>
                  </v-btn>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-divider/>
                </v-layout>
                <v-layout
                  v-for="(oSServico, key) of formFields.servicos"
                  :key="key"
                  row
                  wrap
                  style="background-color:#eee; margin-bottom: 10px;"
                  align-center
                >
                  <v-flex
                    xs12
                    md11
                  >
                    <v-layout row wrap>
                      <v-flex
                        xs12
                        md6
                      >
                        <v-text-field
                          v-model="oSServico.servico.descricao"
                          label="Servico"
                          disabled
                        ></v-text-field>
                      </v-flex>
                      <v-flex
                        xs12
                        md2
                      >
                        <custom-decimal-field
                          v-model="oSServico.valor_unitario"
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
                          v-model="oSServico.quantidade"
                          label="Quantidade"
                          :rules="[formRules.default.required]"
                          required
                          type="number"
                          @input="updateValorTotal(oSServico)"
                        />
                      </v-flex>
                      <v-flex
                        xs12
                        md2
                      >
                        <v-text-field
                          v-model="oSServico.valor_total_formated"
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
                          v-model="oSServico.observacao"
                          label="Observações"
                          rows="1"
                          auto-grow
                        />
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex
                    xs12
                    md1
                  >
                    <v-btn color="error" fab small dark @click="removeItem(key)" title="Remover item">
                      <v-icon>delete</v-icon>
                    </v-btn>
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
import { OrdemServicoServicosController } from "../controllers/OrdemServicoServicosController";
import { ClienteCobrancasController } from "../controllers/ClienteCobrancasController";

import CustomDecimalField from '../components/shared/CustomDecimalField/CustomDecimalField'
import { mapMutations } from "vuex";

export default {
  components: {
    CustomDecimalField
  },
  data() {
    return {
      servicoToAdd: null,
      loading: false,
      valid: false,
      formFields:{
        servicos:[]
      },
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório",
          integer: value => !Number.isInteger(value) || "Informe apenas numeros"
        }
      },

      clienteServicosOptions:[],
      clienteServicosOptionsLoad: false,
    };
  },

  computed: {
    getClienteServicosOptions () {
      // let self = this
      // return this.clienteServicosOptions.filter(clienteServico => {
      //   return !self.formFields.servicos.find(servico => {
      //     return clienteServico.id == servico.cliente_servico_id
      //   })
      // })

      return this.clienteServicosOptions
    }
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async loadEntity() {
      this.SHOW_LOADER()

      let controller = new OrdemServicoServicosController()
      let result = await controller.all(this.getOSID())

      this.CLOSE_LOADER()

      if (!result.error){
        this.formFields.servicos = result.data.data
        this.dataLoaded = true
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        });

        this.$router.push({ path: "/ordens-servico" });
      }
    },

    getOSID () {
      return this.$route.params.id
    },

    async save() {
      if (this.valid) {
        this.loading = true;

        let controller = new OrdemServicoServicosController();
        let result = await controller.update(this.formFields, this.getOSID());

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        if(!result.error)
          this.formFields.servicos = result.data

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },
    
    updateValorTotal (oSServico) {
      window.console.log('total',oSServico.valor_unitario * oSServico.quantidade)
      oSServico.valor_total = oSServico.valor_unitario * oSServico.quantidade
      oSServico.valor_total_formated = this.$options.filters.currency(oSServico.valor_total,{
        symbol:'',
        thousandsSeparator: '.',
        fractionCount: 2,
        fractionSeparator: ','
      })
    },

    updateAllValorTotal () {
      let self = this
      this.formFields.servicos.forEach(function(item){
        item.valor_total_formated = self.$options.filters.currency(item.valor_total,{
          symbol:'',
          thousandsSeparator: '.',
          fractionCount: 2,
          fractionSeparator: ','
        })
      });
    },
    addServico() {
      if(this.servicoToAdd){
        let self = this
        let OSServico = new OrdemServicoServicosController().getModel()
        let clienteServico = this.clienteServicosOptions.find(function(item){
          return item.id == self.servicoToAdd
        })

        OSServico.ordens_servico_id = this.getOSID()
        OSServico.servicos_id = clienteServico.servico.id
        OSServico.valor_unitario = clienteServico.valor
        OSServico.servico = clienteServico.servico
        
        OSServico.cliente_servico_id = clienteServico.id

        this.formFields.servicos.push(OSServico)
        this.servicoToAdd = null
      }
    },

    removeItem(key) {
      this.formFields.servicos.splice(key,1)
    },

    async loadClienteServicos() {
      this.clienteServicosOptionsLoad = true

      let clienteCobrancas = new ClienteCobrancasController()
      let result = await clienteCobrancas.allByOrdemServico(this.getOSID())

      this.clienteServicosOptions = result.data.data

      this.clienteServicosOptionsLoad = false
    },

    setPesoCalculado() {
      this.formFields.balanca_peso_calculado = this.formFields.balanca_peso_entrada - this.formFields.balanca_peso_saida
    },
  },

  watch: {
    'formFields.servicos': function () {
      window.console.log('aqui')
      this.updateAllValorTotal()
    }
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL('/ordens-servico')
    await this.loadEntity()
    this.loadClienteServicos()
  }
};
</script>