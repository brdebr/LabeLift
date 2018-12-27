<template>
  <v-app>
    <TheToolbar/>
    <TheDrawer
      :items="drawer.items"
    />
    <v-content class="grey lighten-3">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <TheMobileDrawer/>
    <TheFooter/>
  </v-app>
</template>
<script>
import TheToolbar from '~/layouts/partials/TheToolbar'
import TheDrawer from '~/layouts/partials/TheDrawer'
import TheMobileDrawer from '~/layouts/partials/TheMobileDrawer'
import TheFooter from '~/layouts/partials/TheFooter'

export default {
  components: {
    TheToolbar,
    TheDrawer,
    TheMobileDrawer,
    TheFooter
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
