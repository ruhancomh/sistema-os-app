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
              :to="`/clientes/editar/${this.getClienteID()}/propostas/adicionar`"
            >
              <v-icon dark>add</v-icon>
              Adicionar proposta
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
              </template>
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.data }}</td>
                <td>{{ props.item.numero }}</td>
                <td>{{ props.item.funcionario ? props.item.funcionario.nome : '' }}</td>
                <td>{{ props.item.servico ? props.item.servico.descricao : ''}}</td>
                <td>
                  <v-chip color="success" text-color="white" v-if="props.item.aprovado">
                    <v-avatar>
                      <v-icon>mdi-check-circle</v-icon>
                    </v-avatar>
                    Sim
                  </v-chip>
                  <v-chip color="error" text-color="white" v-else>
                    <v-avatar>
                      <v-icon>mdi-alert-circle</v-icon>
                    </v-avatar>
                    Não
                  </v-chip>
                </td>
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

import { ClientePropostasController } from "../controllers/ClientePropostasController";

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
          text: "Numero",
          align: "left",
          sortable: true,
          value: "numero"
        },
        {
          text: "Funcionario",
          align: "left",
          sortable: true,
          value: "funcionario"
        },
        {
          text: "Serviço",
          align: "left",
          sortable: true,
          value: "servico"
        },
        {
          text: "Aprovado",
          align: "left",
          sortable: true,
          value: "aprovado"
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

      let clientePropostasController = new ClientePropostasController();
      let result = await clientePropostasController.list(
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
      let clientePropostasController = new ClientePropostasController();
      let result = await clientePropostasController.delete(item,this.getClienteID());
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/clientes/editar/${this.getClienteID()}/propostas/editar/${item}`});
    },

    getClienteID() {
      return this.$route.params.id
    },

    formatYesNo(value){
      return value ? "<b>SIM</b>" : "<b>NÃO</b>"
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
