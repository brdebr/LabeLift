<template>
  <v-navigation-drawer
    :value="$store.state.layout.mobileDrawer.active"
    clipped
    disable-resize-watcher
    width="250"
    class="blue-grey lighten-4"
    fixed
    right
    app
    @input="val => $store.commit('layout/setMobileDrawer',val)"
  >
    <v-layout
      column
      fill-height class="pt-4 pr-3">
      <sign-up-form v-if="!this.$auth.loggedIn" :lg="true"/>
      <toolbar-menu v-if="this.$auth.loggedIn" :lg="true"/>
      <login-form v-if="!this.$auth.loggedIn" :lg="true"/>
    </v-layout>
  </v-navigation-drawer>
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
}
</script>

<style>
</style>
