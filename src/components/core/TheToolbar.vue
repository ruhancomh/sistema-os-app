<template>
  <v-toolbar
    color="teal darken-4"
    app
    fixed
    clipped
    dark
  >
    <v-toolbar-side-icon @click.stop="onClickMenuBtn"></v-toolbar-side-icon>
    <v-btn icon v-if="toolbarBackUrl" @click="redirectBack()">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu
      :close-on-content-click="true"
      :nudge-width="200"
      offset-y
    >
      <template v-slot:activator="{ on }">       
        <v-btn
          v-on="on"
          icon
          class="text-right"
        >
          <v-icon>account_circle</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-tile avatar >
            <v-list-tile-avatar>
              <v-icon class="primary white--text">{{ getUserFirstLetter }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{GET_USER.nome}}</v-list-tile-title>
              <v-list-tile-sub-title>{{GET_USER.email}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
          
        <v-divider></v-divider>

        <v-list dense>
          <v-list-tile
            @click="logout()"
          >
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sair do sistema</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>

  </v-toolbar>
</template>

<script>
import { LoginController } from "../../controllers/LoginController";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      title: ""
    };
  },

  computed: {
    ...mapState(["toolbarBackUrl"]),
    ...mapGetters(['GET_USER']),

    backUrl () {
      return this.$store.state.toolbarBackUrl
    },

    getUserFirstLetter() {
      return this.GET_USER.nome.substring(0,1).toUpperCase()
    }
  },

  watch: {
    $route(val) {
      this.title = val.meta.title ? val.meta.title : '';
    }
  },

  methods: {
    ...mapMutations(["SET_DRAWER", "TOGGLE_DRAWER"]),

    onClickMenuBtn() {
      this.TOGGLE_DRAWER();
    },

    redirectBack(){
      this.$router.push({ path: this.toolbarBackUrl });
    },

    logout () {
      let loginController = new LoginController()
      let result = loginController.logout()

      if(!result.error) {
        this.$router.push({ path: '/login' })
      } else {
        window.console.log(result)
      }
    }
  },

  mounted () {
    
  }
};
</script>