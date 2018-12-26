<template>
  <v-app>
    <TheToolbar
      @toggleDrawer="drawer.visible = !drawer.visible"/>
    <TheDrawer
      :items="drawer.items"
    />
    <v-content class="grey lighten-3">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <TheRDrawer
      :display="drawer.visible"
      :items="drawer.items"/>
    <TheFooter/>
  </v-app>
</template>
<script>
import TheToolbar from '~/layouts/partials/TheToolbar'
import TheDrawer from '~/layouts/partials/TheDrawer'
import TheRDrawer from '~/layouts/partials/TheRDrawer'
import TheFooter from '~/layouts/partials/TheFooter'

export default {
  components: {
    TheToolbar,
    TheDrawer,
    TheFooter,
    TheRDrawer
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
  },
}
</script>
<style lang="scss">
</style>
