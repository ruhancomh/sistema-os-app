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
              to="cidades/adicionar"
            >
              <v-icon dark>add</v-icon>
              Adicionar cidade
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
                    v-model="props.filters.nome"
                  ></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  md2
                >
                  <v-text-field
                    label="UF"
                    v-model="props.filters.uf"
                  ></v-text-field>
                </v-flex>
              </template>
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.nome }}</td>
                <td>{{ props.item.estado.uf }}</td>
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

import { CidadesController } from "../controllers/CidadesController";

import { mapMutations } from "vuex";

export default {
  components: {
    CustomDataTable
  },

  data() {
    return {
      filters: {
        nome: "",
        uf: ""
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
          text: "UF",
          align: "left",
          sortable: true,
          value: "uf"
        }
      ],
      tableData: null,
      tableIpunt: {}
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT"]),

    async getData() {
      let filters = this.tableIpunt.filters;
      let pagination = this.tableIpunt.pagination;

      let cidadesController = new CidadesController();
      let result = await cidadesController.list(
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
      let cidadesController = new CidadesController();
      let result = await cidadesController.delete(item);

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/cidades/editar/${item}` });
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