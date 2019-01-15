<template>
  <v-app>
    <TheToolbar/>
    <TheDrawer
      :items="itemsAuth"
    />
    <v-content class="grey lighten-3">
      <v-container fill-height>
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
      drawer: {
        items: this.$store.getters['layout/itemsPublic']
      }
    }
  },
  computed: {
    itemsAuth() {
      if(this.$auth.loggedIn){
        return this.$store.state.layout.drawer.items
      }else{
        return this.drawer.items
      }
    }
  },
}
</script>
<style lang="scss">
</style>
