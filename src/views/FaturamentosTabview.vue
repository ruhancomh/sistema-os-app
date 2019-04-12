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
          color="blue-grey darken-4"
          slider-color="amber accent-3"
          active-class="blue-grey darken-2 v-tabs__item--active"
          fixed-tabs
          centered
          grow
          icons-and-text
        >
            <v-tab
              v-for="(item,key) of tabs"
              :key="key"
              :to="item.to"
            >
              {{ item.text }}
              <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
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
import { mapMutations } from "vuex"

export default {
  data() {
    return {
      activeTab: '',
      tabs: [
        {
          text: 'Detalhes',
          to: `/faturamentos/editar/${this.getId()}/detalhes`,
          icon: 'mdi-checkbook'
        },
        {
          text: 'Serviços',
          to: `/faturamentos/editar/${this.getId()}/servicos`,
          icon: 'mdi-ballot'
        },
        {
          text: 'Nota Fiscal',
          to: `/faturamentos/editar/${this.getId()}/nota-fiscal`,
          icon: 'mdi-file-check'
        },
      ],
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL"]),

    getId() {
      return this.$route.params.id
    }
  },

  created() {
    this.SET_TOOLBAR_BACK_URL('/ordens-servico')
  }
};
</script>