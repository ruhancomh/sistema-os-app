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
        <v-tabs
              v-model="activeTab"
              dark
              slider-color="yellow"
              fixed-tabs
            >
                <v-tab
                  key="1"
                  to="/clientes/editar/2/informacoes"
                >
                  Detalhes
                </v-tab>
                <v-tab
                  key="2"
                  to="/clientes/editar/2/conversas"
                >
                  Conversas
                </v-tab>
            </v-tabs>
        <v-card
          color="white"
          width="100%"
        >
          <v-card-text>
            <v-tabs-items>
              <v-tab-item><router-view></router-view></v-tab-item>
            </v-tabs-items>
            
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      activeTab: '',
      loading: false,
      valid: false,
      formFields:{},
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },

      atividadesOptions:[],
      atividadesOptionsLoad: false,

      funcionariosOptions:[],
      funcionariosOptionsLoad: false
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL"]),

    getId() {
      return this.$route.params.id
    }
  },

  created() {
    this.SET_TOOLBAR_BACK_URL('/clientes')
  }
};
</script>