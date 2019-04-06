<template>
  <v-dialog
    v-model="dialogActive"
    :lazy="true"
  >
    <v-card>
      <v-card-title
        class="headline"
      >Ordens de Serviço</v-card-title>
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
                v-model="props.filters.data_inicio"
                mask="##/##/####"
                placeholder="dd/mm/aaaa"
                label="Data Inicio"
                return-masked-value
              ></v-text-field>
            </v-flex>

            <v-flex
              xs12
              md2
            >
              <v-text-field
                v-model="props.filters.data_fim"
                mask="##/##/####"
                placeholder="dd/mm/aaaa"
                label="Data Fim"
                return-masked-value
              ></v-text-field>
            </v-flex>
          </template>
          <template
            slot="items"
            slot-scope="props"
          >
            <td>{{ props.item.data_criacao }}</td>
            <td>{{ props.item.codigo_os }}</td>
            <td>{{ props.item.tipo ? props.item.tipo.descricao : '' }}</td>
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
import { OrdensServicoController } from "../../../controllers/OrdensServicoController";

export default {
  components: {
    CustomDataTable
  },
  props: {
    value: {
      default: false
    },

    clientesId: {
      default: false
    }
  },
  data() {
    return {
      filters: {
      },

      defaultSort: "id",
      defaultDescending: true,
      headers: [
        {
          text: "Data",
          align: "left",
          sortable: true,
          value: "data_criacao"
        },
        {
          text: "Numero",
          align: "left",
          sortable: true,
          value: "numero"
        },
        {
          text: "Tipo",
          align: "left",
          sortable: true,
          value: "tipo"
        },
        {
          text: "Gerador",
          align: "left",
          sortable: true,
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
      let filters = this.tableIpunt.filters;
      filters.cliente_id = this.clientesId
      let pagination = this.tableIpunt.pagination;

      let ordensServicoController = new OrdensServicoController();
      let result = await ordensServicoController.list(
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

    onSelected(items) {
      this.selected = items
    }
  },

  watch: {
    dialogActive: function(nv) {
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
    }
  }
}
</script>
