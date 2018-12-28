<template>
  <v-dialog
    v-model="dialog"
    :persistent="loading"
    lazy
    max-width="600px"
    class="login-dialog"
  >
    <v-btn
      slot="activator"
      depressed
      dark
      color="light-green darken-1">
      <span class="mr-2">Login</span>
      <v-icon>exit_to_app</v-icon>
    </v-btn>

    <v-card class="login-dialog">
      <v-card-title class="justify-center">
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text v-if="!loading">
        <v-form>
          <v-text-field
            v-model="form.email"
            validate-on-blur
            prepend-icon="person"
            name="email"
            label="Email"
            type="text"/>
          <v-text-field
            id="password"
            :append-icon="hidePassword ? 'visibility' : 'visibility_off'"
            :type="hidePassword ? 'password' : 'text'"
            v-model="form.password"
            validate-on-blur
            prepend-icon="lock"
            name="password"
            label="Password"
            @click:append="hidePassword = !hidePassword"
          />
        </v-form>
      </v-card-text>
      <v-scale-transition mode="out-in">
        <v-card-text v-if="loading">
          <p>Handling your request, please stand by...</p>
          <p>
            <v-progress-linear :indeterminate="true"/>
          </p>
        </v-card-text>
      </v-scale-transition>
      <v-card-actions
        v-if="!loading"
        class="pb-4">
        <v-spacer/>
        <v-btn
          color="error"
          flat
          round
          outline
          @click="dialog = false">
          Cancel
          <v-icon class="ml-1 pl-0">cancel</v-icon>
        </v-btn>
        <v-btn
          color="success darken-2"
          flat
          round
          outline
          class="ml-3 mr-2"
          @click="login">
          Login
          <v-icon class="ml-1 pl-0">exit_to_app</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      hidePassword: true,
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async google() {
      await this.$auth.loginWith('google').catch(e => {
        this.$snackbar.show('Error', { icon: 'fingerprint' })
      })
    },
    async login() {
      try {
        await this.$auth
          .loginWith('local', {
            data: {
              email: this.form.email,
              password: this.form.password
            }
          })
          .catch(e => {
            this.$snackbar.error('Failed Logging In', { icon: 'error_outline' })
          })
        if (this.$auth.loggedIn) {
          this.$snackbar.success('Successfully Logged In', {
            icon: 'done',
            className: 'green lighten-1'
          })
        }
      } catch (e) {
        this.$snackbar.error('Username or Password wrong', { icon: 'error' })
      }
    }
  }
}
</script>
