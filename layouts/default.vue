<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      width="275"
      fixed
      app
    >
      <v-layout
        column
        justify-space-between
        fill-height>
        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :to="item.to"
            :key="i"
            router
            exact
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon" class="ml-3 mr-3" />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title" class="ml-2"/>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-btn
          icon
          outline
          class="mx-auto mb-3 light-blue--text text--darken-3"
          @click.stop="miniVariant = !miniVariant"
        >
          <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'" />
        </v-btn>
      </v-layout>

    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      dark
      class="blue-grey darken-1"
      app
    >
      <v-toolbar-side-icon
        class="light-blue--text text--lighten-3"
        outline
        @click="drawer = !drawer" />

      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-btn
        depressed
        color="light-green darken-1">
        <span class="mr-2">Login</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>

    </v-toolbar>
    <v-content class="grey lighten-3">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
      :fixed="fixed"
      class="grey ligthte-2 px-3"
      app
    >
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
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
      title: 'LabeLift'
    }
  }
}
</script>
<style lang="scss">
.mini-drawer-btn {
  transition: all 0.5s;
}
</style>
