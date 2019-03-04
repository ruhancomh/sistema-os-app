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
              :to="`/transportadores/editar/${this.getTransportadorID()}/contatos/adicionar`"
            >
              <v-icon dark>add</v-icon>
              Adicionar contato
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
                    label="Nome"
                    clearable
                    v-model="props.filters.nome"
                  ></v-text-field>
                </v-flex>
              </template>
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.nome }}</td>
                <td>{{ props.item.cargo }}</td>
                <td>{{ props.item.telefone }}</td>
                <td>{{ props.item.email }}</td>
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

import { TransportadorContatosController } from "../controllers/TransportadorContatosController";

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
          text: "Nome",
          align: "left",
          sortable: true,
          value: "nome"
        },
        {
          text: "Cargo",
          align: "left",
          sortable: true,
          value: "cargo"
        },
        {
          text: "Telefone",
          align: "left",
          sortable: false,
          value: "telefone"
        },
        {
          text: "E-mail",
          align: "left",
          sortable: true,
          value: "email"
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

      let transportadorContatosController = new TransportadorContatosController();
      let result = await transportadorContatosController.list(
        filters,
        pagination.page,
        pagination.rowsPerPage,
        pagination.sortBy,
        pagination.descending,
        this.getTransportadorID()
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
      let transportadorContatosController = new TransportadorContatosController();
      let result = await transportadorContatosController.delete(item,this.getTransportadorID());
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/transportadores/editar/${this.getTransportadorID()}/contatos/editar/${item}`});
    },

    getTransportadorID() {
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
    this.SET_TOOLBAR_BACK_URL('/transportadores')
  }
};
</script>