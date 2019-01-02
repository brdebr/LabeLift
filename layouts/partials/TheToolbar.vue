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
        <span 
          v-if="envMode === 'development'" 
          class="text-uppercase">
          -- wip [| {{ $vuetify.breakpoint.name }} |]
        </span>
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer/>
    <sign-up-form v-if="!this.$auth.loggedIn"/>
    <login-form v-if="!this.$auth.loggedIn"/>
    <toolbar-menu v-if="this.$auth.loggedIn"/>
    <div 
      v-if="false" 
      slot="extension">
      Use this to show buttons on mobile
    </div>


  </v-toolbar>
</template>
<script>
let envMode = process.env.NODE_ENV

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
      envMode,
      items: [
        { icon: 'apps', title: 'Dashboard', to: '/' },
        { icon: 'bubble_chart', title: 'About', to: '/about' }
      ],
      title: 'LabeLift'
    }
  }
}
</script>
