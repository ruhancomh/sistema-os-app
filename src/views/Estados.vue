<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      justify-center
      align-center
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
              to="estados/novo"
            >
              <v-icon dark>add</v-icon>
              Adicionar estado
            </v-btn>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <custom-data-table
              :headers="headers"
              :table-data="tableData"
              :filters="filters"
              :default-sort="defaultSort"
              @getData="getData($event)"
              @onDeleteItem="onDeleteItem($event)"
              @onEditItem="onEditItem($event)"
            >
              <template slot="filter" slot-scope="props">
                <v-flex xs12 md4>
                  <v-text-field label="Nome" v-model="props.filters.nome"></v-text-field>
                </v-flex>
                <v-flex xs12 md2>
                  <v-text-field label="UF" v-model="props.filters.uf"></v-text-field>
                </v-flex>
              </template>
              <template slot="items" slot-scope="props">
                <td>{{ props.item.nome }}</td>
                <td>{{ props.item.uf }}</td>
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

import { EstadosController } from "../controllers/EstadosController";

export default {
  components: {
    CustomDataTable
  },
  
  data() {
    return {
      filters: {
        nome: '',
        uf: ''
      },

      defaultSort: 'nome',
      headers: [
        {
          text: "Nome",
          align: "left",
          sortable: true,
          value: "nome"
        },
        {
          text: "UF",
          align: "left",
          sortable: true,
          value: "uf"
        }
      ],
      tableData: null

    };
  },

methods: {
    async getData($event) {
      let filters = $event.filters
      let pagination = $event.pagination

      let estadosController = new EstadosController();
      let result = await estadosController.list(
        filters,
        pagination.page,
        pagination.rowsPerPage,
        pagination.sortBy,
        pagination.descending
      );

      if (result.error) {
        // TODO
      } else {
        // this.setDesserts(result.data.data)
        this.tableData = result.data
      }
    },

    onDeleteItem (item) {
      console.log(item)
    },

    onEditItem (item) {
      console.log(item)
    }
  } 

};
</script>