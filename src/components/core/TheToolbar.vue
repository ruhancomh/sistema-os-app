<template>
  <v-toolbar
    color="blue-grey"
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
  </v-toolbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      title: ""
    };
  },

  computed: {
    ...mapState(["toolbarBackUrl"]),

    backUrl () {
      return this.$store.state.toolbarBackUrl
    }
  },

  watch: {
    $route(val) {
      this.title = val.name;
    }
  },

  methods: {
    ...mapMutations(["SET_DRAWER", "TOGGLE_DRAWER"]),

    onClickMenuBtn() {
      this.TOGGLE_DRAWER();
    },

    redirectBack(){
      this.$router.push({ path: this.toolbarBackUrl });
    }
  },

  mounted () {
    
  }
};
</script>