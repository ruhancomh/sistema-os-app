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
                    md2
                  >
                    <v-text-field
                      v-model="formFields.data_geracao"
                      mask="##/##/####"
                      placeholder="dd/mm/aaaa"
                      label="Data de Geração"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.data_recebimento"
                      mask="##/##/####"
                      placeholder="dd/mm/aaaa"
                      label="Data de Recebimento"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                      xs12
                      md3
                    >
                    <v-select
                      v-model="formFields.manifesto_tipos_operacao_id"
                      :items="tipoOperacao"
                      :loading="tipoOperacaoLoad"
                      label="Tipo de Operacao"
                      item-text="descricao"
                      item-value="id"
                      :rules="[formRules.default.required]"
                      required                    
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.numero_manifesto"
                      label="Numero Manifesto"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                      xs12
                      md2
                    >
                    <v-select
                      v-model="formFields.manifesto_tipo"
                      :items="manifestoTiposOptions"
                      :loading="manifestoTiposOptionsLoad"
                      label="Tipo Manifesto"
                      item-text="descricao"
                      item-value="descricao"   
                      :rules="[formRules.default.required]"
                      required                  
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-layout>
                      <v-text-field
                        v-model="formFields.ordens_servico_id"
                        label="Ordem de Serviço"
                        :disabled="true"
                      ></v-text-field>
                      <v-btn
                        small
                        fab
                        flat
                        color="primary"
                        @click="showOrdemServicoSelect()"
                      >
                        <v-icon dark>search</v-icon>
                      </v-btn>
                    </v-layout>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-autocomplete
                      v-model="formFields.clientes_id"
                      label="Cliente"
                      :items="clientesOptions"
                      :loading="clientesOptionsLoad"
                      :search-input.sync="clientesOptionsSearch"
                      item-text="razao_social"
                      item-value="id"
                      :autocomplete="true"
                      :hint="'Digite a razão social ou cnpj do cliente para fazer a busca'"
                      persistent-hint
                      hide-no-data
                      clearable
                      no-filter
                      :rules="[formRules.default.required]"
                      required
                    >
                    </v-autocomplete>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md6
                  >
                    <cliente-enderecos-select
                      v-model="formFields.gerador_id" 
                      label="Gerador"
                      :rules="[formRules.default.required]"
                      :required="true"
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-textarea
                      v-model="formFields.gerador_observacao"
                      label="Observações do gerador"
                      rows="1"
                      auto-grow
                    />
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-autocomplete
                        v-model="formFields.receptores_id"
                        label="Receptor"
                        :items="receptoresOptions"
                        :loading="receptoresOptionsLoad"
                        :search-input.sync="receptoresOptionsSearch"
                        item-text="razao_social"
                        item-value="id"
                        :autocomplete="true"
                        :hint="'Digite a razão social ou cnpj do receptor para fazer a busca'"
                        persistent-hint
                        hide-no-data
                        clearable
                        no-filter
                      >
                    </v-autocomplete>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-textarea
                      v-model="formFields.receptor_observacao"
                      label="Observações do receptor"
                      rows="1"
                      auto-grow
                    />
                  </v-flex>
                  <v-flex
                      xs12
                      md4
                    >
                    <v-select
                      v-model="formFields.transportadores_id"
                      :items="transportadoresOptions"
                      :loading="transportadoresOptionsLoad"
                      label="Transportador"
                      item-text="razao_social"
                      item-value="id"
                      :rules="[formRules.default.required]"
                      required                  
                    />
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                      xs12
                      md5
                    >
                    <v-layout>
                      <v-select
                        v-model="formFields.motorista_id"
                        :items="motoristasOptions"
                        :loading="motoristasOptionsLoad"
                        label="Motorista"
                        item-text="nome"
                        item-value="id"                  
                      />
                    </v-layout>
                  </v-flex>
                  <v-flex
                      xs12
                      md3
                    >
                    <v-layout>
                      <v-select
                        v-model="formFields.veiculos_id"
                        :items="veiculosOptions"
                        :loading="veiculosOptionsLoad"
                        label="Veículo"
                        item-text="placa"
                        item-value="id"                  
                      >
                        <template v-slot:item="data">
                          <v-list-tile-content v-if="data.item">
                            <v-list-tile-title v-html="data.item.placa"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="data.item.descricao"></v-list-tile-sub-title>
                          </v-list-tile-content>
                        </template>
                      </v-select>
                    </v-layout>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 md5>
                    <v-autocomplete
                        v-model="formFields.residuos_id"
                        label="Residuo"
                        :items="residuosOptions"
                        :loading="residuosOptionsLoad"
                        :search-input.sync="residuosOptionsSearch"
                        item-text="grupo"
                        item-value="id"
                        :autocomplete="true"
                        persistent-hint
                        hide-no-data
                        hint="Digite a descrição ou grupo de residuo para fazer a busca"
                        clearable
                      >
                    </v-autocomplete>
                  </v-flex>
                  <v-flex
                      xs12
                      md2
                    >
                    <v-select
                      v-model="formFields.residuo_unidade"
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
                      v-model="formFields.residuo_quantidade"
                      label="Quantidade"
                      :suffix="formFields.residuo_unidade"
                      :precision="3"
                    />
                  </v-flex>
                  <v-flex
                      xs12
                      md3
                    >
                    <v-select
                      v-model="formFields.residuo_estado_fisico"
                      :items="residuoEstadoFisicoOptions"
                      :loading="residuoEstadoFisicoOptionsLoad"
                      label="Estado Físico"
                      item-text="descricao"
                      item-value="descricao"                  
                    />
                  </v-flex>
                  <v-flex
                      xs12
                      md5
                    >
                    <v-layout>
                      <v-select
                        v-model="formFields.residuo_acondicionamentos_id"
                        :items="residuoAcondicionamentosOptions"
                        :loading="residuoAcondicionamentosOptionsLoad"
                        label="Acondicionamento"
                        item-text="descricao"
                        item-value="id"                  
                      />
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
            <ordem-servico-single-select
              v-model="onOrdemServicoSingleSelect"
              @confirm="selectOrdemServico($event)"
            />
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
import { ClientesController } from "../controllers/ClientesController";
import { VeiculosController } from "../controllers/VeiculosController";
import { ResiduosController } from "../controllers/ResiduosController";
import { ResiduoUnidadesController } from "../controllers/ResiduoUnidadesController";
import { ResiduoEstadoFisicoController } from "../controllers/ResiduoEstadoFisicoController";
import { ReceptoresController } from "../controllers/ReceptoresController";
import { TransportadoresController } from "../controllers/TransportadoresController";
import { FuncionariosController } from "../controllers/FuncionariosController";
import { ManifestoTiposOperacaoController } from "../controllers/ManifestoTiposOperacaoController";
import { ManifestoTiposController } from "../controllers/ManifestoTiposController";
import { ResiduoAcondicionamentosController } from "../controllers/ResiduoAcondicionamentosController";

import CustomDecimalField from '../components/shared/CustomDecimalField/CustomDecimalField'
import { mapMutations } from "vuex";
import { debounce } from "debounce";
import ClienteEnderecosSelect from "../components/shared/ClienteEnderecosSelect/ClienteEnderecosSelect"
import OrdemServicoSingleSelect from "./../components/shared/OrdemServicoSingleSelect/OrdemServicoSingleSelect";

export default {
  components: {
    ClienteEnderecosSelect,
    CustomDecimalField,
    OrdemServicoSingleSelect
  },
  data() {
    return {
      onOrdemServicoSingleSelect: false,
      ordemServico: false,

      loading: false,
      valid: false,
      formFields:{},
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },

      tipoOperacao:[],
      tipoOperacaoLoad: false,

      transportadoresOptions:null,
      transportadoresOptionsLoad: false,

      motoristasOptions:null,
      motoristasOptionsLoad: false,

      veiculosOptions:null,
      veiculosOptionsLoad: false,

      residuoAcondicionamentosOptions:null,
      residuoAcondicionamentosOptionsLoad: false,

      residuoUnidadesOptions:null,
      residuoUnidadesOptionsLoad: false,

      manifestoTiposOptions:null,
      manifestoTiposOptionsLoad: false,

      residuoEstadoFisicoOptions:null,
      residuoEstadoFisicoOptionsLoad: false,

      clientesOptions:[],
      clientesOptionsLoad: false,
      clientesOptionsSearch: '',

      geradoresOptions:[],
      geradoresOptionsLoad: false,
      geradoresOptionsSearch: '',

      receptoresOptions:[],
      receptoresOptionsLoad: false,
      receptoresOptionsSearch: '',

      residuosOptions:[],
      residuosOptionsLoad: false,
      residuosOptionsSearch: '',
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async loadEntity() {
      this.SHOW_LOADER()

      let manifestosController = new ManifestosController()
      let result = await manifestosController.get(this.getID())

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
        let result = await manifestosController.update(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },

    async loadClientes() {
      this.clientesOptionsLoad = true

      let clientesController = new ClientesController()
      let result = await clientesController.list({search: this.clientesOptionsSearch})

      this.clientesOptions = result.data.data

      this.clientesOptionsLoad = false
    },

    async loadClientesPreload(id) {
      this.clientesOptionsLoad = true

      if (id) {
        let clientesController = new ClientesController()
        let result = await clientesController.get(id)

        if (!result.error){
          this.clientesOptions.push(result.data)
        }
      }

      this.clientesOptionsLoad = false
    },

    async loadTransportadores() {
      this.transportadoresOptionsLoad = true

      let transportadoresController = new TransportadoresController()
      let result = await transportadoresController.all()

      this.transportadoresOptions = result.data.data

      this.transportadoresOptionsLoad = false
    },

    async loadReceptores() {
      this.receptoresOptionsLoad = true

      let receptoresController = new ReceptoresController()
      let result = await receptoresController.list({search: this.receptoresOptionsSearch})

      this.receptoresOptions = result.data.data

      this.receptoresOptionsLoad = false
    },

    async loadReceptoresPreload(id) {
      this.receptoresOptionsLoad = true

      if (id) {
        let receptoresController = new ReceptoresController()
        let result = await receptoresController.get(id)

        if (!result.error){
          this.receptoresOptions.push(result.data)
        }
      }

      this.receptoresOptionsLoad = false
    },

    async loadResiduos() {
      this.residuosOptionsLoad = true

      let residuosController = new ResiduosController()
      let result = await residuosController.list({search: this.residuosOptionsSearch})

      this.residuosOptions = result.data.data

      this.residuosOptionsLoad = false
    },

    async loadResiduosPreload(id) {
      this.residuosOptionsLoad = true

      if (id) {
        let residuosController = new ResiduosController()
        let result = await residuosController.get(id)

        if (!result.error){
          this.residuosOptions.push(result.data)
        }
      }

      this.residuosOptionsLoad = false
    },

    async loadResiduoAcondicionamentos() {
      this.residuoAcondicionamentosOptionsLoad = true

      let residuoAcondicionamentosController = new ResiduoAcondicionamentosController()
      let result = await residuoAcondicionamentosController.all()

      this.residuoAcondicionamentosOptions = result.data.data

      this.residuoAcondicionamentosOptionsLoad = false
    },

    async loadResiduoUnidades() {
      this.residuoUnidadesOptionsLoad = true

      let residuoUnidadesController = new ResiduoUnidadesController()
      let result = await residuoUnidadesController.all()

      this.residuoUnidadesOptions = result.data

      this.residuoUnidadesOptionsLoad = false
    },

    async loadManifestoTipos() {
      this.manifestoTiposOptionsLoad = true

      let manifestoTiposController = new ManifestoTiposController()
      let result = await manifestoTiposController.all()

      this.manifestoTiposOptions = result.data

      this.manifestoTiposOptionsLoad = false
    },

    async loadResiduoEstadoFisico() {
      this.residuoEstadoFisicoOptionsLoad = true

      let residuoEstadoFisicoController = new ResiduoEstadoFisicoController()
      let result = await residuoEstadoFisicoController.all()

      this.residuoEstadoFisicoOptions = result.data

      this.residuoEstadoFisicoOptionsLoad = false
    },

    async loadTiposOperacao() {
      this.tipoOperacaoLoad = true

      let tiposOperacaoController = new ManifestoTiposOperacaoController()
      let result = await tiposOperacaoController.all()

      this.tipoOperacao = result.data.data

      this.tipoOperacaoLoad = false
    },

    async loadMotoristas() {
      this.motoristasOptionsLoad = true

      let funcionarioController = new FuncionariosController()
      let result = await funcionarioController.allMotoristas()

      this.motoristasOptions = result.data.data

      this.motoristasOptionsLoad = false
    },

    async loadVeiculos() {
      this.veiculosOptionsLoad = true

      let veiculoController = new VeiculosController()
      let result = await veiculoController.all()

      this.veiculosOptions = result.data.data

      this.veiculosOptionsLoad = false
    },

    showOrdemServicoSelect () {
      this.onOrdemServicoSingleSelect = true
    },

    async selectOrdemServico (ordemServico) {
      this.SHOW_LOADER()

      this.ordemServico = ordemServico

      this.formFields.ordens_servico_id = this.ordemServico.id

      await this.loadClientesPreload(this.ordemServico.clientes_id)
      this.formFields.clientes_id = this.ordemServico.clientes_id

      this.formFields.gerador_id = this.ordemServico.gerador_id

      await this.loadReceptoresPreload(this.ordemServico.receptores_id)
      this.formFields.receptores_id = this.ordemServico.receptores_id

      await this.loadResiduosPreload(this.ordemServico.residuos_id)
      this.formFields.residuos_id = this.ordemServico.residuos_id
      
      this.formFields.transportadores_id = this.ordemServico.transportadores_id
      this.formFields.motorista_id = this.ordemServico.motorista_id
      this.formFields.veiculos_id = this.ordemServico.veiculos_id

      this.CLOSE_LOADER()
    }
  },

  watch: {
    clientesOptionsSearch: debounce(function (nv) {
      if(nv) {
        this.loadClientes()
      } else {
        this.clientesOptions = []
      }
    },500),

    receptoresOptionsSearch: debounce(function (nv) {
      if(nv) {
        this.loadReceptores()
      } else {
        this.receptoresOptions = []
      }
    },500),

    residuosOptionsSearch: debounce(function (nv) {
      if(nv) {
        this.loadResiduos()
      } else {
        this.residuosOptions = []
      }
    },500),
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL('/manifestos')
    await this.loadEntity()
    this.loadClientesPreload(this.formFields.clientes_id)
    this.loadReceptoresPreload(this.formFields.receptores_id)
    this.loadResiduosPreload(this.formFields.residuos_id)

    this.loadTransportadores()
    this.loadTiposOperacao()
    this.loadResiduoAcondicionamentos()
    this.loadVeiculos()
    this.loadMotoristas()
    this.loadResiduoUnidades()
    this.loadManifestoTipos()
    this.loadResiduoEstadoFisico()
  }
};
</script>