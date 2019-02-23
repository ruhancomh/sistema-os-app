<template>
  <v-app id="inspire">

    <the-drawer />
    <the-toolbar />
    <the-view />
    <the-alert />
  </v-app>
</template>

<script>
import TheDrawer from "./components/core/TheDrawer";
import TheToolbar from "./components/core/TheToolbar";
import TheView from "./components/core/TheView";
import TheAlert from "./components/core/TheAlert";

export default {
  components: {
    TheDrawer,
    TheToolbar,
    TheView,
    TheAlert
  }
};
</script>
