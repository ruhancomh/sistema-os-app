<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <clientes-conversas-agendamento />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import ClientesConversasAgendamento from "./../components/shared/ClientesConversasAgendamento/ClientesConversasAgendamento";
import { mapMutations } from "vuex";

export default {
  components: {
    ClientesConversasAgendamento
  },
  data() {
    return {
    }
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SHOW_LOADER","CLOSE_LOADER"]),
  },
};
</script>