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
            <v-form v-model="valid" @submit.prevent="">
              <v-container>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="formFields.razao_social"
                      :rules="[formRules.default.required]"
                      label="Razão Social"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="formFields.nome_fantasia"
                      label="Nome Fantasia"
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
                      v-model="formFields.cpf"
                      mask="###.###.###-##"
                      label="CPF"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.telefone"
                      return-masked-value
                      mask="(##) ##########"
                      label="Telefone"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.fax"
                      label="Fax"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.inscricao_estadual"
                      label="Inscrição Estadual"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.numero_licenca"
                      label="Numero da Licença"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.vencimento_licenca"
                      return-masked-value
                      mask="##/##/####"
                      label="Vencimento da licença"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-autocomplete
                      v-model="formFields.residuos"
                      label="Residuos"
                      :items="residuosOptions"
                      :loading="residuosOptionsLoad"
                      :search-input.sync="residuosOptionsSearch"
                      item-text="grupo"
                      item-value="id"
                      multiple
                      chips
                      deletable-chips
                      :autocomplete="true"
                    >
                      <template v-slot:no-data>
                        <v-list-tile>
                          <v-list-tile-content>
                            <v-list-tile-title>
                              Nenhum resultado encontrado para o termo "<strong>{{ residuosOptionsSearch }}</strong>".
                            </v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </template>
                    </v-autocomplete>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
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
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md4
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
                    md4
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
                </v-layout>
                <v-layout row wrap>
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
import { ReceptoresController } from "../controllers/ReceptoresController";
import { EstadosController } from '../controllers/EstadosController';
import { CidadesController } from '../controllers/CidadesController';
import { ResiduosController } from '../controllers/ResiduosController';

import { mapMutations } from "vuex";

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

      estados_id: '',
      estadosOptions:[],
      estadosOptionsLoad: false,

      cidadesOptions:[],
      cidadesOptionsLoad: false,

      bairrosOptions:[],
      bairrosOptionsLoad: false,

      residuosOptionsSearch: '',
      residuosOptions:[],
      residuosOptionsLoad: false,
    };
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

      let receptoresController = new ReceptoresController()
      let result = await receptoresController.get(this.getEntityID())

      this.CLOSE_LOADER()

      if (!result.error){
        this.formFields = result.data
        this.estados_id = this.formFields.cidade ? this.formFields.cidade.estados_id : null
      } else {
        this.SHOW_ALERT({
          type: "error",
          message: result.message
        });

        this.$router.push({ path: `/receptores/` });
      }
    },

    async save() {
      if (this.valid) {
        this.loading = true;

        let receptoresController = new ReceptoresController();
        let result = await receptoresController.update(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        this.loading = false
      }
    },

    async loadResiduos() {
      this.residuosOptionsLoad = true

      let residuosController = new ResiduosController()
      let result = await residuosController.all()

      this.residuosOptions = result.data.data

      this.residuosOptionsLoad = false
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

    getEntityID() {
      return this.$route.params.id
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
    this.SET_TOOLBAR_BACK_URL('/receptores')
    await this.loadEntity()
    this.loadResiduos()
    this.loadEstados()
    this.loadCidades(this.estados_id, this.formFields.cidades_id)
    this.loadBairros(this.formFields.cidades_id, this.formFields.bairros_id)
  }
};
</script>