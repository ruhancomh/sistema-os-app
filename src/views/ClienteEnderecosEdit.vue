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
            <v-form
              v-model="valid"
              @submit.prevent=""
            >
              <v-container>
                <v-layout
                  row
                  wrap
                >
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="formFields.descricao"
                      label="Descrição"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.cnpj"
                      mask="##.###.###/####-##"
                      label="CNPJ"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>                  
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.telefone"
                      label="Telefone"
                      return-masked-value
                      mask="(##) ##########"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs6
                    md3
                  >
                    <v-select
                      v-model="formFields.endereco_tipos_id"
                      :items="enderecoTiposOptions"
                      :loading="enderecoTiposOptionsLoad"
                      label="Tipo"
                      item-text="descricao"
                      item-value="id"                    
                    />
                  </v-flex> 
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.cep"
                      label="CEP"
                      return-masked-value
                      mask="##.###-###"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md7
                  >
                    <v-text-field
                      v-model="formFields.logradouro"
                      label="Logradouro"
                      :rules="[formRules.default.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-select
                      v-model="estados_id"
                      :items="estadosOptions"
                      :loading="estadosOptionsLoad"
                      label="Estado"
                      item-text="nome"
                      item-value="id"                    
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md5
                  >
                    <v-select
                      v-model="formFields.cidades_id"
                      :items="cidadesOptions"
                      :loading="cidadesOptionsLoad"
                      label="Cidade"
                      item-text="nome"
                      item-value="id"   
                      no-data-text="Selecione um estado"                 
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-select
                      v-model="formFields.bairros_id"
                      :items="bairrosOptions"
                      :loading="bairrosOptionsLoad"
                      label="Bairro"
                      item-text="nome"
                      item-value="id" 
                      no-data-text="Seleciona uma cidade"                   
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md5
                  >
                    <v-select
                      v-model="formFields.cliente_contatos_id"
                      :items="clienteContatosOptions"
                      :loading="clienteContatosOptionsLoad"
                      label="Contato"
                      item-text="nome"
                      item-value="id"                  
                    />
                  </v-flex> 
                  <v-flex
                    xs12
                    md12
                  >
                    <v-textarea
                      v-model="formFields.observacao"
                      label="Observações"
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
import { ClienteEnderecosController } from "../controllers/ClienteEnderecosController"

import { mapMutations } from "vuex"
import { EnderecoTiposController } from '../controllers/EnderecoTiposController';
import { EstadosController } from '../controllers/EstadosController';
import { CidadesController } from '../controllers/CidadesController';
import { ClienteContatosController } from '../controllers/ClienteContatosController';

export default {
  data() {
    return {
      loading: false,
      valid: false,
      formFields: {},
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },
      
      clienteContatosOptions:[],
      clienteContatosOptionsLoad: false,

      enderecoTiposOptions:[],
      enderecoTiposOptionsLoad: false,

      estados_id: '',
      estadosOptions:[],
      estadosOptionsLoad: false,

      cidadesOptions:[],
      cidadesOptionsLoad: false,

      bairrosOptions:[],
      bairrosOptionsLoad: false,
    }
  },

  methods: {
    ...mapMutations([
      "SHOW_ALERT",
      "SET_TOOLBAR_BACK_URL",
      "SHOW_LOADER",
      "CLOSE_LOADER"
    ]),

    async loadEntity() {
      this.SHOW_LOADER()

      let clienteEnderecosController = new ClienteEnderecosController()
      let result = await clienteEnderecosController.get(this.getClienteID(),this.getEntityID())

      this.CLOSE_LOADER()

      if (!result.error){
        this.formFields = result.data
        this.estados_id = this.formFields.cidade ? this.formFields.cidade.estados_id : null
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        });

        this.$router.push({ path: `/clientes/editar/${this.getClienteID()}/enderecos` });
      }
    },

    async save() {
      if (this.valid) {
        this.loading = true

        let clienteEnderecosController = new ClienteEnderecosController()
        let result = await clienteEnderecosController.update(this.formFields)

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        })

        if (!result.error)
          this.$router.push({
            path: `/clientes/editar/${this.getClienteID()}/enderecos`
          })

        this.loading = false
      }
    },

    async loadEnderecoTipos() {
      this.enderecoTiposOptionsLoad = true

      let enderecoTiposController = new EnderecoTiposController()
      let result = await enderecoTiposController.all()

      this.enderecoTiposOptions = result.data.data

      this.enderecoTiposOptionsLoad = false
    },

    async loadEstados() {
      this.enderecoTiposOptionsLoad = true

      let estadoController = new EstadosController()
      let result = await estadoController.all()

      this.estadosOptions = result.data.data

      this.enderecoTiposOptionsLoad = false
    },

    async loadCidades(estados_id, cidades_id) {
      this.cidadesOptionsLoad = true

      let cidadeController = new EstadosController()
      let result = await cidadeController.getCidades(estados_id)

      this.cidadesOptions = result.data

      if(!cidades_id){
        this.formFields.cidades_id = null
      } else {
        this.formFields.cidades_id = cidades_id
      }

      this.cidadesOptionsLoad = false
    },

    async loadBairros(cidades_id, bairros_id) {
      this.bairrosOptionsLoad = true

      let cidadeController = new CidadesController()
      let result = await cidadeController.getBairros(cidades_id)

      this.bairrosOptions = result.data

      if(!bairros_id){
        this.formFields.bairros_id = null
      } else {
        this.formFields.bairros_id = bairros_id
      }

      this.bairrosOptionsLoad = false
    },

    async loadContatos() {
      this.clienteContatosOptionsLoad = true

      let clienteContatoController = new ClienteContatosController()
      let result = await clienteContatoController.all(this.getClienteID())

      this.clienteContatosOptions = result.data.data

      this.clienteContatosOptionsLoad = false
    },

    getClienteID() {
      return this.$route.params.id
    },

    getEntityID() {
      return this.$route.params.cliente_enderecos_id
    }
  },

  watch: {
    estados_id: function (nv, ov) {
      if (ov) {
        this.loadCidades(this.estados_id)
      }
    },
    'formFields.cidades_id': {
      handler (nv, ov) {
        if (ov) {
          this.loadBairros(this.formFields.cidades_id)
        }
      },
      deep:true
    }
  },

  async created() {
    this.SET_TOOLBAR_BACK_URL(`/clientes/editar/${this.getClienteID()}/enderecos`)
    await this.loadEntity()
    this.loadEnderecoTipos()
    this.loadEstados()
    this.loadCidades(this.estados_id, this.formFields.cidades_id)
    this.loadBairros(this.formFields.cidades_id, this.formFields.bairros_id)
    this.loadContatos()
  }
}
</script>