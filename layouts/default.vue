<template>
  <v-app>
    <TheToolbar
      @toggleDrawer="drawer = !drawer"/>
    <TheDrawer
      :display="drawer"
    />
    <v-content class="grey lighten-3">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <TheFooter/>
  </v-app>
</template>
<script>
import TheToolbar from '~/layouts/partials/TheToolbar'
import TheDrawer from '~/layouts/partials/TheDrawer'
import TheFooter from '~/layouts/partials/TheFooter'
export default {
  components: {
    TheToolbar,
    TheDrawer,
    TheFooter
  },
  data() {
    return {
      clipped: true,
      drawer: true,
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
<style lang="scss">
</style>
