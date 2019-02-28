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
              :to="`/clientes/editar/${this.getClienteID()}/conversas/adicionar`"
            >
              <v-icon dark>add</v-icon>
              Adicionar conversa
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
              :default-descending="defaultDescending"
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
                    mask="##/##/####"
                    placeholder="dd/mm/aaaa"
                    label="Data"
                    return-masked-value
                    clearable
                    v-model="props.filters.data"
                  ></v-text-field>
                </v-flex>
              </template>
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.data }}</td>
                <td>{{ props.item.cliente ? props.item.cliente.razao_social : '' }}</td>
                <td>{{ props.item.funcionario ? props.item.funcionario.nome : '' }}</td>
                <td>{{ props.item.acao ? props.item.acao.descricao : '' }}</td>
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

import { ConversasController } from "../controllers/ConversasController";

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
      defaultDescending: true,
      headers: [
        {
          text: "Data",
          align: "left",
          sortable: true,
          value: "data"
        },
        {
          text: "Cliente",
          align: "left",
          sortable: true,
          value: "cliente"
        },
        {
          text: "Funcionario",
          align: "left",
          sortable: true,
          value: "funcionario"
        },
        {
          text: "Ação",
          align: "left",
          sortable: true,
          value: "acao"
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

      let conversasController = new ConversasController();
      let result = await conversasController.list(
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
      let conversasController = new ConversasController();
      let result = await conversasController.delete(item,this.getClienteID());
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/clientes/editar/${this.getClienteID()}/conversas/editar/${item}`});
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
  }
};
</script>