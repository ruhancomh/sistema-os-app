<template>
  <v-app id="inspire" dark>

    <the-drawer />
    <the-toolbar />
    <the-view />
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import TheDrawer from './components/core/TheDrawer'
  import TheToolbar from './components/core/TheToolbar'
  import TheView from './components/core/TheView'

  export default {
    components:{
      TheDrawer,
      TheToolbar,
      TheView
    },
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>
