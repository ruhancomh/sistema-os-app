<template>
  <v-card
    color="white"
    width="100%"
  >
    <v-card-title class="headline">
      Conversas Agendadas
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
        :actions="false"
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
              v-model="props.filters.data_agendamento"
              mask="##/##/####"
              placeholder="dd/mm/aaaa"
              label="Data Agendamento"
              return-masked-value
              clearable
            ></v-text-field>
          </v-flex>
          <v-flex
              xs6
              md4
            >
              <v-select
                v-model="props.filters.funcionario"
                :items="funcionariosOptions"
                label="Funcionário"
                item-text="nome"
                item-value="id"
                clearable
              />
            </v-flex>
            <v-flex
              xs6
              md3
            >
              <v-select
                v-model="props.filters.acao"
                :items="acaoOptions"
                :loading="acaoOptionsLoad"
                label="Ação"
                item-text="descricao"
                item-value="id"
                clearable
              />
            </v-flex>
        </template>
        <template
          slot="items"
          slot-scope="props"
        >
          <td>{{ props.item.data }}</td>
          <td>{{ props.item.data_agendamento }}</td>
          <td>{{ props.item.cliente ? props.item.cliente.razao_social : '' }}</td>
          <td>{{ props.item.funcionario ? props.item.funcionario.nome : '' }}</td>
          <td>{{ props.item.acao ? props.item.acao.descricao : '' }}</td>
        </template>
      </custom-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { ConversasController } from "../../../controllers/ConversasController";
import { FuncionariosController } from "../../../controllers/FuncionariosController"
import { ConversaAcoesController } from '../../../controllers/ConversaAcoesController'

import CustomDataTable from "./../CustomDataTable/CustomDataTable";

import { mapMutations } from "vuex";

export default {
  components: {
    CustomDataTable
  },

  data() {
    return {
      filters: {
        data_agendamento: '',
        acao: '',
        funcionario: '',
      },
      defaultSort: "data_agendamento",
      defaultDescending: false,
      headers: [
        {
          text: "Contato Anterior",
          align: "left",
          sortable: true,
          value: "data"
        },
        {
          text: "Agendamento",
          align: "left",
          sortable: true,
          value: "data_agendamento"
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
        },
      ],
      tableData: null,
      tableIpunt: {},

      acaoOptions: [],
      acaoOptionsLoad: false,

      funcionariosOptions: [],
      funcionariosOptionsLoad: false
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async getData() {
      let filters = this.tableIpunt.filters;
      let pagination = this.tableIpunt.pagination;

      let conversasController = new ConversasController();
      let result = await conversasController.listAgendamento(
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

    onEditItem(item) {
      //this.$router.push({ path: `/clientes/editar/${this.getClienteID()}/conversas/editar/${item}`});
    },

    async loadFuncionarios() {
      this.funcionariosOptionsLoad = true

      let funcionarioController = new FuncionariosController()
      let result = await funcionarioController.all()

      this.funcionariosOptions = result.data.data

      this.funcionariosOptionsLoad = false
    },

    async loadAcoes() {
      this.acaoOptionsLoad = true

      let conversaAcoesController = new ConversaAcoesController()
      let result = await conversaAcoesController.all()

      this.acaoOptions = result.data.data

      this.acaoOptionsLoad = false
    },
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
    this.loadFuncionarios()
    this.loadAcoes()

    let dateNow = new Date()

    this.filters.data_agendamento = `${dateNow.getDate()}/${dateNow.getMonth().toString().padStart(2, '0')}/${dateNow.getFullYear()}`
  }
};
</script>