<template>
  <v-container fluid fill-height class="loginOverlay">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-card>
          <v-card-text class="pt-4">
            <div>
                <v-form v-model="valid" ref="form">
                  <v-text-field
                    label="Seu e-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
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
                  ></v-text-field>
                  <v-layout justify-space-between>
                      <v-btn
                        @click="login"
                        :loading="loading"
                        class="primary"
                      >Entrar</v-btn>
                  </v-layout>
                </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { LoginController } from "../controllers/LoginController";

export default {
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
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Informe um e-mail valido'
      ],
    }
  },
  methods: {
    async login () {
      if (this.$refs.form.validate()){
        this.loading = true
        let loginController = new LoginController()
        let result = await loginController.login(this.email, this.password)

        this.loading = false
        
        if(!result.error) {
          this.$router.push({ path: '/' })
        } else {
          window.console.log(result)
        }
      }
    }
  }
}
</script>

