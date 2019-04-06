<template>
  <v-container
    fluid
    fill-height
    style="padding:0px"
  >
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-card
          color="white"
          width="100%"
        >
          <v-card-title>
            <v-btn
              color="primary"
              large
              @click="showOrdemServicoSelect()"
            >
              <v-icon dark>add</v-icon>
              Adicionar servico faturado
            </v-btn>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <custom-data-table
              v-model="tableIpunt"
              :headers="headers"
              :table-data="tableData"
              :default-sort="defaultSort"
              @onDeleteItem="onDeleteItem($event)"
              @onEditItem="onEditItem($event)"
            >
              <template
                slot="filter"
                slot-scope="props"
              >
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Cliente"
                    clearable
                    v-model="props.filters.cliente_nome"
                  ></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  md3
                >
                  <v-text-field
                    label="CNPJ"
                    clearable
                    v-model="props.filters.cliente_cnpj"
                    mask="##.###.###/####-##"
                    return-masked-value
                  ></v-text-field>
                </v-flex>
              </template>
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.ordem_servico ? props.item.ordem_servico.codigo_os : '' }}</td>
                <td>{{ props.item.ordem_servico ? props.item.ordem_servico.data_criacao : '' }}</td>
                <td>{{ props.item.servico ? props.item.servico.descricao : '' }}</td>
                <td>{{ props.item.ordem_servico_servicos_valor_total | currency('R$', '.', 2 ,',') }}</td>
              </template>
            </custom-data-table>
            <ordem-servico-select-table
              v-model="ordemServicoSelect"
              :clientes-id="faturamento.clientes_id"
              @confirm="addFaturamentoServicos($event)"
            />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CustomDataTable from "./../components/shared/CustomDataTable/CustomDataTable";
import OrdemServicoSelectTable from "./../components/shared/OrdemServicoSelectTable/OrdemServicoSelectTable";

import { FaturamentosController } from "../controllers/FaturamentosController";
import { FaturamentoServicosController } from "../controllers/FaturamentoServicosController";

import { mapMutations } from "vuex";

export default {
  components: {
    CustomDataTable,
    OrdemServicoSelectTable
  },

  data() {
    return {
      filters: {
        cliente_nome: "",
        cnpj:""
      },
      defaultSort: "numero_os",
      headers: [
        {
          text: "Numero O.S",
          align: "left",
          sortable: true,
          value: "numero_os"
        },
        {
          text: "Data O.S",
          align: "left",
          sortable: true,
          value: "data_os"
        },
        {
          text: "Serviço",
          align: "left",
          sortable: false,
          value: "servico"
        },
        {
          text: "Valor Total",
          align: "left",
          sortable: true,
          value: "valor_total"
        }
      ],
      tableData: {
        data: [],
        total: 0
      },
      tableIpunt: {},

      faturamento: false,
      ordemServicoSelect: false
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async getData() {
      let filters = this.tableIpunt.filters;
      let pagination = this.tableIpunt.pagination;

      let faturamentoServicosController = new FaturamentoServicosController();
      let result = await faturamentoServicosController.list(
        filters,
        pagination.page,
        pagination.rowsPerPage,
        pagination.sortBy,
        pagination.descending,
        this.getFaturamentosId()
      );

      if (result.error) {
        this.tableData = {
          data: [],
          total: 0
        };
      } else {
        this.tableData = result.data;
      }
    },

    async loadFaturamento() {
      let faturamentosController = new FaturamentosController()
      let result = await faturamentosController.get(this.getID())

      this.faturamento = result.data
    },

    getID () {
      return this.$route.params.id
    },

    async onDeleteItem(item) {
      this.SHOW_LOADER()
      let faturamentoServicosController = new FaturamentoServicosController();
      let result = await faturamentoServicosController.delete(item,this.getFaturamentosId());
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/faturamentos/editar/${this.getFaturamentosId()}/servicos/editar/${item}` });
    },

    getFaturamentosId() {
      return this.$route.params.id
    },

    showOrdemServicoSelect () {
      this.ordemServicoSelect = true
    },

    async addFaturamentoServicos(items) {
      this.SHOW_LOADER()
      let faturamentoServicosController = new FaturamentoServicosController();
      let result = await faturamentoServicosController.create(items.map(item => item.id),this.getFaturamentosId());

      this.getData()
      
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });
    }
  },

  watch: {
    tableIpunt: {
      handler () {
        this.getData()
      },
      deep: true
    }
  },

  async created () {
    this.SET_TOOLBAR_BACK_URL('/faturamentos')
    await this.loadFaturamento()
    await this.getData()
  }
};
</script>