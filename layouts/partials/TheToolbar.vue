<template>
  <v-toolbar
    :clipped-left="clipped"
    fixed
    dark
    height="64"
    class="blue-grey darken-1"
    app
  >
    <v-toolbar-side-icon
      class="light-blue--text text--lighten-3"
      outline
      @click="$emit('toggleDrawer')" />

    <v-toolbar-title>
      <nuxt-link
        exact
        to="/"
        tag="span"
        style="cursor:pointer">
        {{ title }}
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer/>
    <login-form>
      <v-btn
        depressed
        color="light-green darken-1">
        <span class="mr-2">Login</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </login-form>
  </v-toolbar>
</template>
<script>
import LoginForm from '~/components/LoginForm'
export default {
  components: {
    LoginForm
  },
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
