<template>
  <v-toolbar
    color="blue-grey"
    app
    fixed
    clipped
    dark
  >
    <v-toolbar-side-icon @click.stop="onClickMenuBtn"></v-toolbar-side-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      title: ""
    };
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
    }
  }
};
</script>