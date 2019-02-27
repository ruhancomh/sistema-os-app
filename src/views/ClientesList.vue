<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      justify-center
      align-center
      row
      wrap
    >
      <v-flex>
        <v-card
          color="white"
          width="100%"
        >
          <v-card-title>
            <v-btn
              color="primary"
              large
              to="clientes/adicionar"
            >
              <v-icon dark>add</v-icon>
              Adicionar cliente
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
                    label="Razão Social"
                    clearable
                    v-model="props.filters.razao_social"
                  ></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Nome Fantasia"
                    clearable
                    v-model="props.filters.nome_fantasia"
                  ></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  md3
                >
                  <v-text-field
                    label="CNPJ"
                    clearable
                    v-model="props.filters.cnpj"
                    mask="##.###.###/####-##"
                    return-masked-value
                  ></v-text-field>
                </v-flex>
              </template>
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.razao_social }}</td>
                <td>{{ props.item.nome_fantasia }}</td>
                <td>{{ props.item.telefone_principal }}</td>
                <td>{{ props.item.atividade ? props.item.atividade.descricao : '' }}</td>
                <td>{{ props.item.cnpj ? props.item.cnpj : props.item.cpf }}</td>
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

import { ClientesController } from "../controllers/ClientesController";

import { mapMutations } from "vuex";

export default {
  components: {
    CustomDataTable
  },

  data() {
    return {
      filters: {
        razao_social: "",
        nome_fantasia: "",
        cnpj:""
      },

      defaultSort: "razao_scial",
      headers: [
        {
          text: "Razão Social",
          align: "left",
          sortable: true,
          value: "razao_social"
        },
        {
          text: "Nome Fantasia",
          align: "left",
          sortable: true,
          value: "nome_fantasia"
        },
        {
          text: "Telefone",
          align: "left",
          sortable: false,
          value: "telefone_principal"
        },
        {
          text: "Atividade",
          align: "left",
          sortable: true,
          value: "atividade"
        },
        {
          text: "CNPJ/CPF",
          align: "left",
          sortable: false,
          value: "cnpj"
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

      let clientesController = new ClientesController();
      let result = await clientesController.list(
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
      let clientesController = new ClientesController();
      let result = await clientesController.delete(item);
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/clientes/editar/${item}` });
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