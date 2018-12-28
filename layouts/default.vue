<template>
  <v-app>
    <TheToolbar/>
    <TheDrawer
      :items="drawer.items"
    />
    <v-content class="grey lighten-3">
      {{this.$store.state.snacks.list}}
      <v-container fill-height>
        <nuxt />
      </v-container>
    <Snackbar/>
    </v-content>
    <TheFooter/>
  </v-app>
</template>
<script>
import TheToolbar from '~/layouts/partials/TheToolbar'
import TheDrawer from '~/layouts/partials/TheDrawer'
import TheFooter from '~/layouts/partials/TheFooter'
import Snackbar from '~/components/utils/Snackbar'

export default {
  components: {
    TheToolbar,
    TheDrawer,
    TheFooter,
    Snackbar
  },
  data() {
    return {
      drawer: {
        items: [
          { icon: 'apps', title: 'Dashboard', to: '/' },
          { icon: 'info', title: 'About', to: '/about' }
        ]
      }
    }
  }
}
</script>
<style lang="scss">
</style>
