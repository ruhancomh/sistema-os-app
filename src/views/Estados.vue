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
            <v-text-field label="Nome" v-model="filter.nome"></v-text-field>
            <v-text-field label="UF" v-model="filter.uf"></v-text-field>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :pagination.sync="pagination"
              :total-items="totalDesserts"
              :loading="loading"
              :rows-per-page-text="config.rowsPerPageTex"
              :rows-per-page-items="config.rowsPerPageItems"
              class="elevation-1"
            >
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.nome }}</td>
                <td>{{ props.item.uf }}</td>
                <td class="justify-center layout px-0">
                  <v-icon
                    small
                    class="mr-2"
                  >
                    edit
                  </v-icon>
                  <v-icon small>
                    delete
                  </v-icon>
                </td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { EstadoController } from "../controllers/EstadoController";

export default {
  data() {
    return {
      firstLoad: true,
      totalDesserts: 0,
      loading: true,
      config: {
        rowsPerPageTex: 'Itens por página',
        rowsPerPageItems: [10, 20, 40, 100]
      },
      filter: {
        nome: '',
        uf: ''
      },
      pagination: {
        sortBy: 'nome',
        descending: false
      },
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
        },
        {
          text: ''
        }
      ],
      desserts: [],

    };
  },

  computed: {
    params () {
      return {
        ...this.pagination,
        filter: this.filter
      }
    }
  },

  methods: {
    async getData() {
      this.loading = true;

      let estadosController = new EstadoController();
      let result = await estadosController.list(
        this.filter,
        this.pagination.page,
        this.pagination.rowsPerPage,
        this.pagination.sortBy,
        this.pagination.descending
      );

      if (result.error) {
        // TODO
      } else {
        this.setDesserts(result.data.data)
        this.totalDesserts = result.data.meta.total
      }

      this.loading = false;
      this.firstLoad = false;
    },

    setDesserts (data) {
      if(data) {
        this.desserts = data.map(item => {
          return {
            nome: item.nome,
            uf: item.uf
          }
        })

        this.totalDesserts = data.length
      } else {
        this.desserts = []
        this.totalDesserts = 0
      }
    }
  },

  watch: {
    pagination: {
      handler () {
        if(!this.firstLoad){
          this.getData()
        }
      },
      deep: true
    }
  },

  mounted() {
    this.getData()
  } 

};
</script>