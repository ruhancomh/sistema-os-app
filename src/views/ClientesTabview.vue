<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      justify-center
      align-center
      row
      wrap
    >
      <v-flex>
        <v-tabs
          v-model="activeTab"
          dark
          slider-color="yellow"
          fixed-tabs
        >
            <v-tab
              v-for="(item,key) of tabs"
              :key="key"
              :to="item.to"
            >
              {{ item.text }}
            </v-tab>
        </v-tabs>
        <v-tabs-items>
          <v-tab-item><router-view></router-view></v-tab-item>
        </v-tabs-items>
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
      tabs: [
        {
          text: 'Detalhes',
          to: `/clientes/editar/${this.getId()}/detalhes`
        },
        {
          text: 'Contatos',
          to: `/clientes/editar/${this.getId()}/contatos`
        },
        {
          text: 'Endereços',
          to: `/clientes/editar/${this.getId()}/enderecos`
        },
        {
          text: 'Conversas',
          to: `/clientes/editar/${this.getId()}/conversas`
        },
      ],
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