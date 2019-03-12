<template>
  <v-app id="inspire">
    <component :is="layout"></component>
  </v-app>
</template>

<script>
import TheLayoutDefault from "./components/core/TheLayoutDefault";
import TheLayoutEmpty from "./components/core/TheLayoutEmpty";

const default_layout = 'the-layout-empty'

export default {
  components: {
    TheLayoutDefault,
    TheLayoutEmpty,
  },
  computed: {
    layout () {
      window.console.log(this.$route.meta)
      return this.$route.meta.layout || default_layout
    }
  }
};
</script>
