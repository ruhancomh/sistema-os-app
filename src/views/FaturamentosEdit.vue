<template>
  <v-container
    fluid
    fill-height
    style="padding:0px"
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
          <v-card-text>
            <v-form v-model="valid" @submit.prevent="" ref="form">
              <v-container>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.data_faturamento"
                      mask="##/##/#### ##:##"
                      placeholder="dd/mm/aaaa hh:mm"
                      label="Data faturamento"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-autocomplete
                      v-model="formFields.clientes_id"
                      label="Cliente"
                      :items="clientesOptions"
                      :loading="clientesOptionsLoad"
                      :search-input.sync="clientesOptionsSearch"
                      item-text="razao_social"
                      item-value="id"
                      :autocomplete="true"
                      :hint="'Digite a razão social ou cnpj do cliente para fazer a busca'"
                      persistent-hint
                      hide-no-data
                      clearable
                      no-filter
                      :rules="[formRules.default.required]"
                      required
                    >
                    </v-autocomplete>
                  </v-flex>
                  <v-flex
                      xs12
                      md3
                    >
                    <v-select
                      v-model="formFields.funcionarios_id"
                      :items="funcionariosOptions"
                      :loading="funcionariosOptionsLoad"
                      label="Funcionário"
                      item-text="nome"
                      item-value="id"
                      :rules="[formRules.default.required]"
                      required                  
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      :value="valorTotal"
                      label="Valor Total"
                      prefix="R$"
                      disabled
                    />
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-textarea
                      v-model="formFields.observacoes_servicos"
                      label="Observações do serviço"
                      rows="1"
                      auto-grow
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-textarea
                      v-model="formFields.observacoes_compra"
                      label="Observações pedido de compra"
                      rows="1"
                      auto-grow
                    />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              large
              :loading="loading"
              @click="save"
            >
              Salvar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { FaturamentosController } from "../controllers/FaturamentosController";
import { ClientesController } from "../controllers/ClientesController";
import { FuncionariosController } from "../controllers/FuncionariosController";
import { mapMutations } from "vuex";
import { debounce } from "debounce";

export default {
  data() {
    return {
      loading: false,
      valid: false,
      formFields:{},
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },

      funcionariosOptions:null,
      funcionariosOptionsLoad: false,

      clientesOptions:[],
      clientesOptionsLoad: false,
      clientesOptionsSearch: '',

    };
  },

  computed: {
    valorTotal () {
      return this.$options.filters.currency(this.formFields.valor_total,{
          symbol:'',
          thousandsSeparator: '.',
          fractionCount: 2,
          fractionSeparator: ','
        })
    }
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),

    async loadEntity() {
      this.SHOW_LOADER()

      let faturamentosController = new FaturamentosController()
      let result = await faturamentosController.get(this.getID())

      this.CLOSE_LOADER()

      if (!result.error){
        this.formFields = result.data
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        });

        this.$router.push({ path: "/faturamentos" });
      }
    },

    getID () {
      return this.$route.params.id
    },

    async save() {
      if (this.valid) {
        this.loading = true;

        let faturamentosController = new FaturamentosController();
        let result = await faturamentosController.update(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },

    async loadClientes() {
      this.clientesOptionsLoad = true

      let clientesController = new ClientesController()
      let result = await clientesController.list({search: this.clientesOptionsSearch})

      this.clientesOptions = result.data.data

      this.clientesOptionsLoad = false
    },

    async loadFuncionarios() {
      this.funcionariosOptionsLoad = true

      let funcionarioController = new FuncionariosController()
      let result = await funcionarioController.all()

      this.funcionariosOptions = result.data.data

      this.funcionariosOptionsLoad = false
    },

    async loadClientesPreload(id) {
      this.clientesOptionsLoad = true

      if (id) {
        let clientesController = new ClientesController()
        let result = await clientesController.get(id)

        if (!result.error){
          this.clientesOptions.push(result.data)
        }
      }

      this.clientesOptionsLoad = false
    },

  },

  watch: {
    clientesOptionsSearch: debounce(function (nv) {
      if(nv) {
        this.loadClientes()
      } else {
        this.clientesOptions = []
      }
    },500),
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL('/faturamentos')
    await this.loadEntity()
    this.loadClientesPreload(this.formFields.clientes_id)

    this.loadFuncionarios()
  }
};
</script>