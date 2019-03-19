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
                      v-model="formFields.data_criacao"
                      mask="##/##/#### ##:##"
                      placeholder="dd/mm/aaaa hh:mm"
                      label="Data"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                      xs12
                      md3
                    >
                    <v-select
                      v-model="formFields.ordem_servico_tipos_id"
                      :items="tiposOSOptions"
                      :loading="tiposOSOptionsLoad"
                      label="Tipo de OS"
                      item-text="descricao"
                      item-value="id"
                      :rules="[formRules.default.required]"
                      required                    
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.codigo_os"
                      label="Código"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                      xs12
                      md4
                    >
                    <v-select
                      v-model="formFields.funcionarios_id"
                      :items="funcionariosOptions"
                      :loading="funcionariosOptionsLoad"
                      label="Funcionário"
                      item-text="nome"
                      item-value="id"
                      :rules="[formRules.default.required]"
                      required                  
                    />
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
                      :rules="[formRules.default.required]"
                      required
                      no-filter
                    >
                    </v-autocomplete>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.empresa_terceirizada"
                      label="Empresa Terceirizada"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.nota_fiscal_numero"
                      label="Nº Nota Fiscal"
                    ></v-text-field>
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
                    />
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-autocomplete
                        v-model="formFields.atracacao_id"
                        label="Atracação"
                        :items="atracacaoOptions"
                        :loading="atracacaoOptionsLoad"
                        :search-input.sync="atracacaoOptionsSearch"
                        item-text="razao_social"
                        item-value="id"
                        :autocomplete="true"
                        :hint="'Digite a razão social ou cnpj do cliente para fazer a busca'"
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
                      v-model="formFields.atracacao_observacao"
                      label="Observações da atracação"
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
                    />
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                      xs12
                      md5
                    >
                    <v-select
                      v-model="formFields.motorista_id"
                      :items="motoristasOptions"
                      :loading="motoristasOptionsLoad"
                      label="Motorista"
                      item-text="nome"
                      item-value="id"                  
                    />
                  </v-flex>
                  <v-flex
                      xs12
                      md3
                    >
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
                  </v-flex>
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
                      md4
                    >
                    <v-select
                      v-model="formFields.equipamentos_id"
                      :items="equipamentosOptions"
                      :loading="equipamentosOptionsLoad"
                      label="Equipamento"
                      item-text="descricao"
                      item-value="id"                  
                    />
                  </v-flex>
                  <v-flex xs12 md4>
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
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-textarea
                      v-model="formFields.servico_observacao"
                      label="Observações do serviço"
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-textarea
                      v-model="formFields.comentarios"
                      label="Comentários"
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
import { ClientesController } from "../controllers/ClientesController";
import { EquipamentosController } from "../controllers/EquipamentosController";
import { VeiculosController } from "../controllers/VeiculosController";
import { ResiduosController } from "../controllers/ResiduosController";
import { ResiduoUnidadesController } from "../controllers/ResiduoUnidadesController";
import { ReceptoresController } from "../controllers/ReceptoresController";
import { OrdemServicoTiposController } from "../controllers/OrdemServicoTiposController";
import { FuncionariosController } from "../controllers/FuncionariosController";

import CustomDecimalField from '../components/shared/CustomDecimalField/CustomDecimalField'
import { mapMutations } from "vuex";
import { debounce } from "debounce";
import ClienteEnderecosSelect from "../components/shared/ClienteEnderecosSelect/ClienteEnderecosSelect"

export default {
  components: {
    ClienteEnderecosSelect,
    CustomDecimalField
  },
  data() {
    return {
      loading: false,
      valid: false,
      dataLoaded: false,
      formFields:{},
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },

      tiposOSOptions:[],
      tiposOSOptionsLoad: false,

      funcionariosOptions:null,
      funcionariosOptionsLoad: false,

      motoristasOptions:null,
      motoristasOptionsLoad: false,

      veiculosOptions:null,
      veiculosOptionsLoad: false,

      equipamentosOptions:null,
      equipamentosOptionsLoad: false,

      residuoUnidadesOptions:null,
      residuoUnidadesOptionsLoad: false,

      clientesOptions:[],
      clientesOptionsLoad: false,
      clientesOptionsSearch: '',

      atracacaoOptions:[],
      atracacaoOptionsLoad: false,
      atracacaoOptionsSearch: '',

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

      let ordensServicoController = new OrdensServicoController()
      let result = await ordensServicoController.get(this.getID())

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
        let result = await ordensServicoController.update(this.formFields);

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

    async loadAtracacoes() {
      this.atracacaoOptionsLoad = true

      let clientesController = new ClientesController()
      let result = await clientesController.list({search: this.atracacaoOptionsSearch})

      this.atracacaoOptions = result.data.data

      this.atracacaoOptionsLoad = false
    },

    async loadAtracacoesPreload(id) {
      this.atracacaoOptionsLoad = true

      if (id) {
        let clientesController = new ClientesController()
        let result = await clientesController.get(id)

        if (!result.error){
          this.atracacaoOptions.push(result.data)
        }
      }

      this.atracacaoOptionsLoad = false
    },

    async loadFuncionarios() {
      this.funcionariosOptionsLoad = true

      let funcionarioController = new FuncionariosController()
      let result = await funcionarioController.all()

      this.funcionariosOptions = result.data.data

      this.funcionariosOptionsLoad = false
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

    async loadResiduoUnidades() {
      this.residuoUnidadesOptionsLoad = true

      let residuoUnidadesController = new ResiduoUnidadesController()
      let result = await residuoUnidadesController.all()

      this.residuoUnidadesOptions = result.data

      this.residuoUnidadesOptionsLoad = false
    },

    async loadTiposOS() {
      this.tiposOSOptionsLoad = true

      let ordemServicoTiposController = new OrdemServicoTiposController()
      let result = await ordemServicoTiposController.all()

      this.tiposOSOptions = result.data.data

      this.tiposOSOptionsLoad = false
    },

    async loadEquipamentos() {
      this.equipamentosOptionsLoad = true

      let equipamentosController = new EquipamentosController()
      let result = await equipamentosController.all()

      this.equipamentosOptions = result.data.data

      this.equipamentosOptionsLoad = false
    },

    async loadMotoristas() {
      this.motoristasOptionsLoad = true

      let funcionarioController = new FuncionariosController()
      let result = await funcionarioController.all()

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
  },

  watch: {
    clientesOptionsSearch: debounce(function (nv) {
      if(nv) {
        this.loadClientes()
      } else {
        this.clientesOptions = []
      }
    },500),

    atracacaoOptionsSearch: debounce(function (nv) {
      if(nv) {
        this.loadAtracacoes()
      } else {
        this.atracacaoOptions = []
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
    this.SET_TOOLBAR_BACK_URL('/ordens-servico')
    await this.loadEntity()
    this.loadClientesPreload(this.formFields.clientes_id)
    this.loadAtracacoesPreload(this.formFields.atracacao_id)
    this.loadReceptoresPreload(this.formFields.receptores_id)
    this.loadResiduosPreload(this.formFields.residuos_id)

    this.loadFuncionarios()
    this.loadTiposOS()
    this.loadVeiculos()
    this.loadMotoristas()
    this.loadEquipamentos()
    this.loadResiduoUnidades()
  }
};
</script>