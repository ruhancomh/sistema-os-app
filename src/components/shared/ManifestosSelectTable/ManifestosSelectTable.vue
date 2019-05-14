<template>
  <v-dialog
    v-model="dialogActive"
    :lazy="true"
  >
    <v-card>
      <v-card-title
        class="headline"
      >Manifestos</v-card-title>
      <v-card-text>
        <custom-data-table
          v-model="tableIpunt"
          :headers="headers"
          :table-data="tableData"
          :filters="filters"
          :default-sort="defaultSort"
          :actions="false"
          :select-all="true"
          item-key="id"
          @onSelected="onSelected($event)"
        >
          <template
            slot="filter"
            slot-scope="props"
          >
            <v-flex
              xs12
              md2
            >
              <v-text-field
                v-model="props.filters.data_geracao"
                mask="##/##/####"
                placeholder="dd/mm/aaaa"
                label="Data Geracao"
                return-masked-value
              ></v-text-field>
            </v-flex>
            <v-flex
              xs12
              md2
            >
            <v-select
              v-model="props.filters.manifesto_tipo"
              :items="manifestoTiposOptions"
              :loading="manifestoTiposOptionsLoad"
              label="Tipo Manifesto"
              item-text="descricao"               
            />
          </v-flex>
          </template>
          <template
            slot="items"
            slot-scope="props"
          >
            <td>{{ props.item.data_geracao }}</td>
            <td>{{ props.item.manifesto_tipo }}</td>
            <td>{{ props.item.numero_manifesto }}</td>
            <td>{{ props.item.tipo_operacao ? props.item.tipo_operacao.descricao : '' }}</td>
            <td>{{ props.item.cliente ? props.item.cliente.razao_social : '' }}</td>
            <td>{{ props.item.gerador ? props.item.gerador.cliente.razao_social : '' }}</td>
            <td>{{ props.item.receptor ? props.item.receptor.razao_social : '' }}</td>
            <td>{{ props.item.residuo ? props.item.residuo.grupo : '' }}</td>
            <td>{{ props.item.veiculo ? props.item.veiculo.placa : '' }}</td>
          </template>
        </custom-data-table>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          flat="flat"
          @click="closeDialog()"
        >
          Fechar
        </v-btn>
        <v-btn
          color="primary"
          flat="flat"
          :loading="loading"
          @click="confirm()"
        >
          Confirmar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CustomDataTable from "./../CustomDataTable/CustomDataTable";
import { ManifestosController } from "../../../controllers/ManifestosController";
import { ManifestoTiposController } from "../../../controllers/ManifestoTiposController";

export default {
  components: {
    CustomDataTable
  },
  props: {
    value: {
      default: false
    },

    manifesto: {
      default: false
    }
  },
  data() {
    return {
      filters: {
        data_geracao: '',
        manifesto_tipo: ''
      },

      defaultSort: "data_geracao",
      defaultDescending: true,
      headers: [
        {
          text: "Data Geração",
          align: "left",
          sortable: true,
          value: "data_criacao"
        },
        {
          text: "Tipo",
          align: "left",
          sortable: false,
          value: "manifesto_tipo"
        },
        {
          text: "Numero",
          align: "left",
          sortable: true,
          value: "numero_manifesto"
        },
        {
          text: "Operação",
          align: "left",
          sortable: true,
          value: "tipo_operacao"
        },
        {
          text: "Cliente",
          align: "left",
          sortable: false,
          value: "cliente_nome"
        },
        {
          text: "Gerador",
          align: "left",
          sortable: false,
          value: "gerador_nome"
        },
        {
          text: "Receptor",
          align: "left",
          sortable: false,
          value: "receptor_nome"
        },
        {
          text: "Resíduo",
          align: "left",
          sortable: false,
          value: "residuo"
        },
        {
          text: "Veículo",
          align: "left",
          sortable: false,
          value: "veiculo"
        }
      ],
      selected: [],
      tableData: {
        data: [],
        total: 0
      },
      tableIpunt: {},
      dialogActive: false,

      loading: false
    };
  },
  methods: {
    closeDialog() {
      this.dialogActive = false
    },

    confirm() {  
      this.$emit("confirm", this.selected);
      this.closeDialog();
    },

    async getData() {
      this.selected = false
      let filters = this.tableIpunt.filters
      let pagination = this.tableIpunt.pagination;

      let manifestosController = new ManifestosController();
      let result = await manifestosController.list(
        filters,
        pagination.page,
        pagination.rowsPerPage,
        pagination.sortBy,
        pagination.descending
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

    async loadManifestoTipos() {
      this.manifestoTiposOptionsLoad = true

      let manifestoTiposController = new ManifestoTiposController()
      let result = await manifestoTiposController.all()

      this.manifestoTiposOptions = result.data

      this.manifestoTiposOptionsLoad = false
    },

    setManifesto() {
      this.filters.not_in = this.manifesto.id

      switch(this.manifesto.manifesto_tipo) {
        case 'MTR2':          
          this.filters.manifesto_tipo = 'MTR1'
          break;
        case 'MTR3':          
          this.filters.manifesto_tipo = 'MTR2'
          break;
      }
    },

    onSelected(items) {
      this.selected = items
    },
  },

  watch: {
    dialogActive: function(nv) {
      if(nv){
        this.getData()
      }
      if(nv !== this.value) {
        this.$emit("input", nv)
      }
    },

    value: function(nv) {
      if(nv !== this.dialogActive) {
        this.dialogActive = nv
      }
    },

    tableIpunt: {
      handler () {
        this.getData()
      },
      deep: true
    },

    manifesto: function () {
      this.setManifesto()
    }
  },


  created () {
    this.loadManifestoTipos()
  }
}
</script>
