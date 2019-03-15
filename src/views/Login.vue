<template>
  <v-container fluid fill-height class="loginOverlay" style="background-color:#e8e9ed">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-2 style="border-top:4px solid #1976d2;">
        <v-card>
          <v-card-title primary-title class="justify-center">
            <v-img :src="logo" contain height="150"/>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form v-model="valid" ref="form">
                  <v-layout>
                    <v-flex
                      xs12
                      md12
                    >
                      <v-text-field
                        label="Seu e-mail"
                        v-model="email"
                        :rules="emailRules"
                        required
                        prepend-inner-icon="mdi-account"
                      ></v-text-field>
                      <v-text-field
                        label="Sua senha"
                        v-model="password"
                        min="8"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (e1 = !e1)"
                        :type="e1 ? 'password' : 'text'"
                        :rules="passwordRules"
                        counter
                        required
                        prepend-inner-icon="mdi-textbox-password"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                <v-layout justify-space-between class="mt-4">
                  <v-flex>
                    <v-btn
                      @click="login"
                      :loading="loading"
                      class="primary"
                      width="100%"
                      large
                      block
                    >Entrar</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <the-alert />
  </v-container>
</template>

<script>
import { LoginController } from "../controllers/LoginController";
import TheAlert from "./../components/core/TheAlert";

import { mapMutations } from "vuex";

export default {
  components: {
    TheAlert
  },
  data () {
    return {
      e1: true,
      valid: false,
      loading: false,
      password: '',
      passwordRules: [
        (v) => !!v || 'Senha é obrigatória',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail é obrigatório',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Informe um e-mail valido'
      ],
    }
  },
  computed: {
    logo () {
      return require('../assets/logo-clean.png')
    }
  },
  methods: {
    ...mapMutations(["SHOW_ALERT"]),

    async login () {
      if (this.$refs.form.validate()){
        this.loading = true
        let loginController = new LoginController()
        let result = await loginController.login(this.email, this.password)

        this.loading = false

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });
        
        if(!result.error) {
          this.$router.push({ path: '/' })
        }
      }
    }
  }
}
</script>

