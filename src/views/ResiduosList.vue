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
              to="residuos/adicionar"
            >
              <v-icon dark>add</v-icon>
              Adicionar residuo
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
                    label="Grupo"
                    clearable
                    v-model="props.filters.grupo"
                  ></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Código"
                    clearable
                    v-model="props.filters.codigo"
                  ></v-text-field>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Classe"
                    clearable
                    v-model="props.filters.classe"
                  ></v-text-field>
                </v-flex>
              </template>
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.grupo }}</td>
                <td>{{ props.item.codigo }}</td>
                <td>{{ props.item.onu }}</td>
                <td>{{ props.item.classe ? props.item.classe.descricao : '' }}</td>
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

import { ResiduosController } from "../controllers/ResiduosController";

import { mapMutations } from "vuex";

export default {
  components: {
    CustomDataTable
  },

  data() {
    return {
      filters: {
        grupo: "",
        codigo: "",
        classe: ""
      },

      defaultSort: "grupo",
      headers: [
        {
          text: "Grupo",
          align: "left",
          sortable: true,
          value: "grupo"
        },
        {
          text: "Código",
          align: "left",
          sortable: true,
          value: "codigo"
        },
        {
          text: "Onu",
          align: "left",
          sortable: false,
          value: "onu"
        },
        {
          text: "Classe",
          align: "left",
          sortable: true,
          value: "classe"
        },
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

      let residuosController = new ResiduosController();
      let result = await residuosController.list(
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
      let residuosController = new ResiduosController();
      let result = await residuosController.delete(item);
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/residuos/editar/${item}` });
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