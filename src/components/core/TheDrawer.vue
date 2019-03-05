<template>
  <v-navigation-drawer
    v-model="inputValue"
    fixed
    left
    app
  >
    <v-list dense>
      <template v-for="(item, i) in links">
        <v-list-group
          v-if="item.group"
          :key="i"
          :prepend-icon="item.icon"
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-for="(subItem, j) in item.links"
            :key="j"
            :to="subItem.to"
          >
            <v-list-tile-action v-if="subItem.icon">
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile
          v-else
          :key="i"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      links: [
        {
          group:true,
          icon: 'mdi-account-multiple',
          title: 'Clientes',

          links: [
            {
              group: false,
              icon: "add",
              title: "Adicionar novo",
              to: "/clientes/adicionar"
            },
            {
              group: false,
              icon: "mdi-view-list",
              title: "Listar todos",
              to: "/clientes"
            },
          ]
        },
        {
          group:true,
          icon: 'mdi-truck-delivery',
          title: 'Transportadores',

          links: [
            {
              group: false,
              icon: "add",
              title: "Adicionar novo",
              to: "/transportadores/adicionar"
            },
            {
              group: false,
              icon: "mdi-view-list",
              title: "Listar todos",
              to: "/transportadores"
            },
          ]
        },
        {
          group:true,
          icon: 'mdi-account-arrow-left',
          title: 'Receptores',

          links: [
            {
              group: false,
              icon: "add",
              title: "Adicionar novo",
              to: "/receptores/adicionar"
            },
            {
              group: false,
              icon: "mdi-view-list",
              title: "Listar todos",
              to: "/receptores"
            },
          ]
        },
        {
          group:true,
          icon: "mdi-account-tie",
          title: "Funcionários",

          links: [
            {
              group: false,
              icon: "add",
              title: "Adicionar novo",
              to: "/funcionarios/adicionar"
            },
            {
              group: false,
              icon: "mdi-view-list",
              title: "Listar todos",
              to: "/funcionarios"
            },
            {
              group: false,
              icon: "assignment",
              title: "Cargos",
              to: "/funcionario-cargos"
            },
          ]
        },
        {
          group: true,
          icon: "assignment",
          title: "Cadastros básicos",

          links: [
            {
              group: false,
              icon: "",
              title: "Serviços",
              to: "/servicos"
            },
            {
              group: false,
              icon: "",
              title: "Residuos",
              to: "/residuos"
            },
            {
              group: false,
              icon: "",
              title: "Tratamentos de residuo",
              to: "/residuo-tratamentos"
            },
            {
              group: false,
              icon: "",
              title: "Classes de residuo",
              to: "/residuo-classes"
            },
            {
              group: false,
              icon: "",
              title: "Atividades dos clientes",
              to: "/cliente-atividades"
            },
            {
              group: false,
              icon: "",
              title: "Tipos de endereço",
              to: "/endereco-tipos"
            },
            {
              group: false,
              icon: "",
              title: "Ações de conversa",
              to: "/conversa-acoes"
            },
            {
              group: false,
              icon: "",
              title: "Bairros",
              to: "/Bairros"
            },
            {
              group: false,
              icon: "",
              title: "Cidades",
              to: "/cidades"
            },
            // {
            //   group: false,
            //   icon: "",
            //   title: "Estados",
            //   to: "/estados"
            // }
          ]
        },
        // {
        //   group: false,
        //   icon: "settings",
        //   title: "Configurações",
        //   to: "/configuracoes"
        // }
      ]
    };
  },

  computed: {
    inputValue: {
      get() {
        return this.$store.state.drawer;
      },

      set(val) {
        this.SET_DRAWER(val);
      }
    }
  },

  methods: {
    ...mapMutations(["SET_DRAWER", "TOGGLE_DRAWER"])
  }
};
</script>