<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col class="col-12 d-flex justify-center">
            <v-card class="elevation-12" width="100%" max-width="400">
              <v-form @submit.prevent="signIn">
                <v-card-text>
                  <v-text-field
                    v-model="credentials.email"
                    label="Email"
                    name="email"
                    prepend-icon="person"
                    type="text"
                    :error="hasError"
                    :error-messages="error"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    v-model="credentials.password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    :error="hasError"
                    :error-messages="error"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn type="submit" color="primary">
                    Login
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <is-footer :app="true"></is-footer>
  </v-app>
</template>

<script>
import * as types from '../store/modules/auth/mutation_types'

export default {
  name: 'SignIn',
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    error() {
      return this.$store.getters['auth/error']
    },
    hasError() {
      return this.error !== null
    }
  },
  methods: {
    signIn() {
      this.$store
        .dispatch('auth/login', this.credentials)
        .then(response => {
          this.$store.commit('auth/' + types.AUTH_UPDATE_TOKEN, response.data)
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(() => {})
    }
  }
}
</script>

<style>
.login-page .v-application--wrap {
  background: linear-gradient(#515ac7, #ac5abd);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>
