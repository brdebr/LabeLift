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
    <div class="hidden-sm-and-down">
      <sign-up-form v-if="!this.$auth.loggedIn">
        <v-btn
          depressed
          color="primary darken-1">
          <span class="mr-2">Sign up</span>
          <v-icon>person_add</v-icon>
        </v-btn>
      </sign-up-form>
      <login-form v-if="!this.$auth.loggedIn">
        <v-btn
          depressed
          color="light-green darken-1">
          <span class="mr-2">Login</span>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </login-form>
      <toolbar-menu v-if="this.$auth.loggedIn"/>
    </div>
    <div class="hidden-md-and-up">
      <v-btn
        flat
        outline
        color="light-blue lighten-3"
        icon>
        <v-icon>
          vertical_split
        </v-icon>
      </v-btn>
    </div>
  </v-toolbar>
</template>
<script>
import LoginForm from '~/components/auth/LoginForm'
import SignUpForm from '~/components/auth/SignUpForm'
import ToolbarMenu from '~/components/profile/ToolbarMenu'

export default {
  components: {
    LoginForm,
    ToolbarMenu,
    SignUpForm
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
