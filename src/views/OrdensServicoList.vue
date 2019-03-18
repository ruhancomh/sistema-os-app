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
              to="ordens-servico/adicionar"
            >
              <v-icon dark>add</v-icon>
              Adicionar O.S
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
                <td>{{ props.item.data_criacao }}</td>
                <td>{{ props.item.tipo ? props.item.tipo.descricao : '' }}</td>
                <td>{{ props.item.cliente ? props.item.cliente.razao_social : '' }}</td>
                <td>{{ props.item.cliente ? props.item.cliente.cnpj : '' }}</td>
                <td>{{ props.item.receptor ? props.item.receptor.razao_social : '' }}</td>
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

import { OrdensServicoController } from "../controllers/OrdensServicoController";

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
          text: "Data",
          align: "left",
          sortable: true,
          value: "data_criacao"
        },
        {
          text: "Tipo",
          align: "left",
          sortable: true,
          value: "tipo"
        },
        {
          text: "Cliente",
          align: "left",
          sortable: false,
          value: "cliente_nome"
        },
        {
          text: "CNPJ",
          align: "left",
          sortable: true,
          value: "cliente_cnpj"
        },
        {
          text: "Receptor",
          align: "left",
          sortable: false,
          value: "receptor_nome"
        }
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

      let ordensServicoController = new OrdensServicoController();
      let result = await ordensServicoController.list(
        filters,
        pagination.page,
        pagination.rowsPerPage,
        pagination.sortBy,
        pagination.descending
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
      let ordensServicoController = new OrdensServicoController();
      let result = await ordensServicoController.delete(item);
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/ordens-servico/editar/${item}/detalhes` });
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