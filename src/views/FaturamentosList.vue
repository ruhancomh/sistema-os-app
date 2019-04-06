<template>
  <v-container
    fluid
    fill-height
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
              to="faturamentos/adicionar"
            >
              <v-icon dark>add</v-icon>
              Adicionar faturamento
            </v-btn>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <custom-data-table
              v-model="tableIpunt"
              :headers="headers"
              :table-data="tableData"
              :filters="filters"
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
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.data_faturamento }}</td>
                <td>{{ props.item.cliente ? props.item.cliente.razao_social : '' }}</td>
                <td>{{ props.item.data_vencimento}}</td>
                <td>{{ props.item.valor | currency('R$ ','.',2,',')}}</td>
                <td>{{ props.item.valor_pago | currency('R$ ','.',2,',')}}</td>
              </template>
            </custom-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CustomDataTable from "./../components/shared/CustomDataTable/CustomDataTable";

import { FaturamentosController } from "../controllers/FaturamentosController";

import { mapMutations } from "vuex";

export default {
  components: {
    CustomDataTable
  },

  data() {
    return {
      filters: {
        cliente_nome: "",
        cnpj:""
      },

      defaultSort: "id",
      defaultDescending: true,
      headers: [
        {
          text: "Numero",
          align: "left",
          sortable: true,
          value: "numero"
        },
        {
          text: "Data faturamento",
          align: "left",
          sortable: true,
          value: "data_faturamento"
        },
        {
          text: "Cliente",
          align: "left",
          sortable: false,
          value: "cliente_nome"
        },
        {
          text: "Data vencimento",
          align: "left",
          sortable: true,
          value: "data_vencimento"
        },
        {
          text: "Valor",
          align: "left",
          sortable: true,
          value: "valor"
        },
        {
          text: "Valor Pago",
          align: "left",
          sortable: true,
          value: "valor_pago"
        },
      ],
      tableData: null,
      tableIpunt: {}
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SHOW_LOADER","CLOSE_LOADER"]),

    async getData() {
      let filters = this.tableIpunt.filters;
      let pagination = this.tableIpunt.pagination;

      let faturamentosController = new FaturamentosController();
      let result = await faturamentosController.list(
        filters,
        pagination.page,
        pagination.rowsPerPage,
        pagination.sortBy,
        pagination.descending
      );

      if (result.error) {
        this.tableData = [];
      } else {
        this.tableData = result.data;
      }
    },

    async onDeleteItem(item) {
      this.SHOW_LOADER()
      let faturamentosController = new FaturamentosController();
      let result = await faturamentosController.delete(item);
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/faturamentos/editar/${item}/detalhes` });
    }
  },

  watch: {
    tableIpunt: {
      handler () {
        this.getData()
      },
      deep: true
    }
  }
};
</script>