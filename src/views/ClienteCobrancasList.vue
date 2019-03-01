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
              :to="`/clientes/editar/${this.getClienteID()}/cobrancas/adicionar`"
            >
              <v-icon dark>add</v-icon>
              Adicionar cobrança
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
              :default-descending="defaultDescendig"
              @onDeleteItem="onDeleteItem($event)"
              @onEditItem="onEditItem($event)"
            >
              <template
                slot="filter"
                slot-scope="props"
              >
                <v-flex
                  xs12
                  md3
                >
                  <v-text-field
                    label="Data"
                    clearable
                    v-model="props.filters.data"
                  ></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  md3
                >
                  <v-text-field
                    label="Vencimento"
                    clearable
                    v-model="props.filters.vencimento"
                  ></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  md3
                >
                  <v-text-field
                    label="Referência"
                    clearable
                    v-model="props.filters.referencia"
                  ></v-text-field>
                </v-flex>
              </template>
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.data }}</td>
                <td>{{ props.item.servico ? props.item.servico.descricao : '' }}</td>
                <td>{{ props.item.valor }}</td>
                <td>{{ props.item.referencia }}</td>
                <td>{{ props.item.vencimento }}</td>
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

import { ClienteCobrancasController } from "../controllers/ClienteCobrancasController";

import { mapMutations } from "vuex";

export default {
  components: {
    CustomDataTable
  },

  data() {
    return {
      filters: {
        data: ''
      },

      defaultSort: "data",
      defaultDescendig: true,
      headers: [
        {
          text: "Data",
          align: "left",
          sortable: true,
          value: "data"
        },
        {
          text: "Serviço",
          align: "left",
          sortable: true,
          value: "servico"
        },
        {
          text: "Valor",
          align: "left",
          sortable: true,
          value: "valor"
        },
        {
          text: "Referência",
          align: "left",
          sortable: true,
          value: "referencia"
        },
        {
          text: "Vencimento",
          align: "left",
          sortable: true,
          value: "vencimento"
        }
      ],
      tableData: null,
      tableIpunt: {}
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async getData() {
      let filters = this.tableIpunt.filters;
      let pagination = this.tableIpunt.pagination;

      let clienteCobrancasController = new ClienteCobrancasController();
      let result = await clienteCobrancasController.list(
        filters,
        pagination.page,
        pagination.rowsPerPage,
        pagination.sortBy,
        pagination.descending,
        this.getClienteID()
      );

      if (result.error) {
        this.tableData = [];
      } else {
        // this.setDesserts(result.data.data)
        this.tableData = result.data;
      }
    },

    async onDeleteItem(item) {
      this.SHOW_LOADER()
      let clienteCobrancasController = new ClienteCobrancasController();
      let result = await clienteCobrancasController.delete(item,this.getClienteID());
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/clientes/editar/${this.getClienteID()}/cobrancas/editar/${item}`});
    },

    getClienteID() {
      return this.$route.params.id
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

  created () {
    this.SET_TOOLBAR_BACK_URL('/clientes')
  }
};
</script>