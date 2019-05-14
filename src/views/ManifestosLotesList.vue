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
              @click="showManifestosSelect()"
            >
              <v-icon dark>add</v-icon>
              Adicionar manifesto ao lote
            </v-btn>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <custom-data-table
              v-model="tableIpunt"
              :headers="headers"
              :table-data="tableData"
              :default-sort="defaultSort"
              :actions="true"
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
                    label="Cliente"
                    clearable
                    v-model="props.filters.cliente_nome"
                  ></v-text-field>
                </v-flex>
              </template>
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.manifesto_vinculado.ordens_servico_id}}</td>
                <td>{{ props.item.manifesto_vinculado.data_geracao }}</td>
                <td>{{ props.item.manifesto_vinculado.numero_manifesto }}</td>
                <td>{{ props.item.manifesto_vinculado.gerador ? props.item.manifesto_vinculado.gerador.cliente.razao_social : '' }}</td>
                <td>{{ props.item.manifesto_vinculado.residuo ? props.item.manifesto_vinculado.residuo.grupo : '' }}</td>
                <td>{{ props.item.manifesto_vinculado.residuo_quantidade }}</td>
                <td>{{ props.item.manifesto_vinculado.residuo_unidade }}</td>
              </template>
              <template
                slot="actions"
                slot-scope="props"
              >
                <v-btn
                  small
                  flat
                  fab
                  title="Excluir item"
                  @click="onDeleteItem(props.item.manifesto_vinculado.id)"
                >
                  <v-icon>delete</v-icon>
                </v-btn>
              </template>
            </custom-data-table>
            <manifestos-select-table
              v-model="manifestosSelect"
              :manifesto="manifesto"
              @confirm="addManifestoLotes($event)"
            />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CustomDataTable from "./../components/shared/CustomDataTable/CustomDataTable";
import ManifestosSelectTable from "./../components/shared/ManifestosSelectTable/ManifestosSelectTable";

import { ManifestosController } from "../controllers/ManifestosController";
import { ManifestoLotesController } from "../controllers/ManifestoLotesController";

import { mapMutations } from "vuex";

export default {
  components: {
    CustomDataTable,
    ManifestosSelectTable
  },

  data() {
    return {
      filters: {
        cliente_nome: ""
      },
      defaultSort: "data_geracao",
      headers: [
        {
          text: "O.S",
          align: "left",
          sortable: true,
          value: "numero_os"
        },
        {
          text: "Data Ger.",
          align: "left",
          sortable: true,
          value: "data_geracao"
        },
        {
          text: "Manifesto",
          align: "left",
          sortable: false,
          value: "numero_manifesto"
        },
        {
          text: "Gerador",
          align: "left",
          sortable: false,
          value: "gerador_cliente_razao_social"
        },
        {
          text: "Residuo",
          align: "left",
          sortable: false,
          value: "residuo"
        },
        {
          text: "QTD",
          align: "left",
          sortable: false,
          value: "residuo_quantidade"
        },
        {
          text: "Unid.",
          align: "left",
          sortable: false,
          value: "residuo_unidade"
        }
      ],
      tableData: {
        data: [],
        total: 0
      },
      tableIpunt: {},

      manifesto: false,
      manifestosSelect: false
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async getData() {
      let filters = this.tableIpunt.filters;
      let pagination = this.tableIpunt.pagination;

      let manifestoLotesController = new ManifestoLotesController();
      let result = await manifestoLotesController.list(
        filters,
        pagination.page,
        pagination.rowsPerPage,
        pagination.sortBy,
        pagination.descending,
        this.getManifestosId()
      );

      if (result.error) {
        this.tableData = {
          data: [],
          total: 0
        };
      } else {
        this.tableData = result.data;
      }
    },

    async loadManifesto() {
      let manifestosController = new ManifestosController()
      let result = await manifestosController.get(this.getID())

      this.manifesto = result.data
    },

    getID () {
      return this.$route.params.id
    },

    async onDeleteItem(item) {
      this.SHOW_LOADER()
      let manifestoLotesController = new ManifestoLotesController();
      let result = await manifestoLotesController.delete(item,this.getManifestosId());
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    getManifestosId() {
      return this.$route.params.id
    },

    showManifestosSelect () {
      this.manifestosSelect = true
    },

    async addManifestoLotes(items) {
      this.SHOW_LOADER()
      let manifestoLotesController = new ManifestoLotesController();
      let result = await manifestoLotesController.create(items.map(item => item.id),this.getManifestosId());

      this.getData()
      
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });
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

  async created () {
    this.SET_TOOLBAR_BACK_URL('/manifestos')
    await this.loadManifesto()
    await this.getData()
  }
};
</script>