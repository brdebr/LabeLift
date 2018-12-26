<template>
  <v-dialog
    v-model="dialog"
    :persistent="loading"
    lazy
    max-width="600px"
    class="login-dialog"
  >
    <template slot="activator">
      <slot>
        LOGIN
      </slot>
    </template>

    <v-card class="login-dialog">
      <v-card-title class="justify-center">
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text v-if="!loading">
        <v-form>
          <v-text-field
            v-model="form.email"
            prepend-icon="person"
            name="username"
            label="Username"
            type="text"/>
          <v-text-field
            id="password"
            v-model="form.password"
            prepend-icon="lock"
            name="password"
            label="Password"
            type="password"
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
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async google() {
      await this.$auth.loginWith('google').catch(e => {
        this.$toast.show('Error', { icon: 'fingerprint' })
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
            this.$toast.error('Failed Logging In', { icon: 'error_outline' })
          })
        if (this.$auth.loggedIn) {
          this.$toast.success('Successfully Logged In', {
            icon: 'done',
            className: 'green lighten-1'
          })
        }
      } catch (e) {
        this.$toast.error('Username or Password wrong', { icon: 'error' })
      }
    }
  }
}
</script>
