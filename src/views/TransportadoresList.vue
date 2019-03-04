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
              to="transportadores/adicionar"
            >
              <v-icon dark>add</v-icon>
              Adicionar transportador
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
                    placeholder="00.000.000/0000-00"
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
                <td>{{ props.item.telefone }}</td>
                <td>{{ props.item.cnpj ? props.item.cnpj : props.item.cpf }}</td>
                <td>{{ props.item.cidade ? props.item.cidade.nome + '-' + props.item.cidade.estado.uf : '' }}</td>
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

import { TransportadoresController } from "../controllers/TransportadoresController";

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

      defaultSort: "razao_social",
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
          text: "CNPJ/CPF",
          align: "left",
          sortable: false,
          value: "cnpj"
        },
        {
          text: "Cidade",
          align: "left",
          sortable: true,
          value: "cidade"
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

      let transportadoresController = new TransportadoresController();
      let result = await transportadoresController.list(
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
      let transportadoresController = new TransportadoresController();
      let result = await transportadoresController.delete(item);
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/transportadores/editar/${item}/detalhes` });
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