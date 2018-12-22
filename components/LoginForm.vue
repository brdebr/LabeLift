<template>
  <v-dialog
    v-model="login.dialog"
    :persistent="login.loading"
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
      <v-card-text v-if="!login.loading">
        <v-form>
          <v-text-field
            prepend-icon="person"
            name="login"
            label="Login"
            type="text"/>
          <v-text-field
            id="password"
            prepend-icon="lock"
            name="password"
            label="Password"
            type="password"
          />
        </v-form>
      </v-card-text>
      <v-scale-transition mode="out-in">
        <v-card-text v-if="login.loading">
          <p>Handling your request, please stand by...</p>
          <p>
            <v-progress-linear :indeterminate="true"/>
          </p>
        </v-card-text>
      </v-scale-transition>
      <v-card-actions v-if="!login.loading" class="pb-4">
        <v-spacer/>
        <v-btn
          color="error"
          flat
          round
          outline
          @click="$emit('close')">
            Cancel
            <v-icon class="ml-1 pl-0">cancel</v-icon>
        </v-btn>
        <v-btn
          color="success darken-2"
          flat
          round
          outline
          class="ml-3 mr-2"
          @click="login.loading = true">
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
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Dashboard', to: '/' },
        { icon: 'bubble_chart', title: 'About', to: '/about' }
      ],
      miniVariant: false,
      title: 'LabeLift',
      login: {
        dialog: false,
        loading: false
      }
    }
  }
}
</script>
