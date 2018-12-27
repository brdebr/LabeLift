<template>
  <v-toolbar
    clipped-left
    clipped-right
    fixed
    dark
    height="64"
    class="blue-grey darken-1"
    app
  >
    <v-toolbar-side-icon
      class="light-blue--text text--lighten-3"
      outline
      @click="$store.commit('layout/toggleDrawer')" />

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
    <div v-show="$vuetify.breakpoint.smAndUp">
      <sign-up-form v-if="!this.$auth.loggedIn"/>
      <login-form v-if="!this.$auth.loggedIn"/>
      <toolbar-menu v-if="this.$auth.loggedIn"/>
    </div>
    <v-btn
      v-show="!$vuetify.breakpoint.smAndUp"
      flat
      outline
      color="light-blue lighten-3"
      icon
      @click="$store.commit('layout/toggleMobileDrawer')">
      <v-icon>
        vertical_split
      </v-icon>
    </v-btn>


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
      items: [
        { icon: 'apps', title: 'Dashboard', to: '/' },
        { icon: 'bubble_chart', title: 'About', to: '/about' }
      ],
      title: 'LabeLift'
    }
  }
}
</script>
