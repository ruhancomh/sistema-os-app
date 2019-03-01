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
              :to="`/clientes/editar/${this.getClienteID()}/enderecos/adicionar`"
            >
              <v-icon dark>add</v-icon>
              Adicionar endereço
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
                    label="Descrição"
                    clearable
                    v-model="props.filters.descricao"
                  ></v-text-field>
                </v-flex>
              </template>
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.tipo.descricao ? props.item.tipo.descricao : '' }}</td>
                <td>{{ props.item.descricao }}</td>
                <td>{{ props.item.cnpj }}</td>
                <td>{{ props.item.telefone }}</td>
                <td>{{ props.item.cep }}</td>
                <td>{{ props.item.logradouro }}</td>
                <td>{{ props.item.bairro ? props.item.bairro.nome : '' }}</td>
                <td>{{ props.item.cidade ? props.item.cidade.nome+'-'+props.item.cidade.estado.uf : '' }}</td>
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

import { ClienteEnderecosController } from "../controllers/ClienteEnderecosController";

import { mapMutations } from "vuex";

export default {
  components: {
    CustomDataTable
  },

  data() {
    return {
      filters: {
        nome: ''
      },

      defaultSort: "nome",
      headers: [
        {
          text: "Tipo",
          align: "left",
          sortable: true,
          value: "tipo"
        },
        {
          text: "Descriçao",
          align: "left",
          sortable: true,
          value: "descricao"
        },
        {
          text: "CNPJ",
          align: "left",
          sortable: false,
          value: "cnpj"
        },
        {
          text: "Telefone",
          align: "left",
          sortable: false,
          value: "telefone"
        },
        {
          text: "CEP",
          align: "left",
          sortable: false,
          value: "cep"
        },
        {
          text: "Logradouro",
          align: "left",
          sortable: false,
          value: "logradouro"
        },
        {
          text: "Bairro",
          align: "left",
          sortable: false,
          value: "bairro"
        },
        {
          text: "Cidade",
          align: "left",
          sortable: false,
          value: "cidade"
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

      let clienteEnderecosController = new ClienteEnderecosController();
      let result = await clienteEnderecosController.list(
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
      let clienteEnderecosController = new ClienteEnderecosController();
      let result = await clienteEnderecosController.delete(item,this.getClienteID());
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/clientes/editar/${this.getClienteID()}/enderecos/editar/${item}`});
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