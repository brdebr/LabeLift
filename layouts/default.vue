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
              <v-icon
                class="ml-3 mr-3"
                v-html="item.icon" />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title
                class="ml-2"
                v-text="item.title"/>
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
      <login-form>
        <v-btn
          depressed
          color="light-green darken-1">
          <span class="mr-2">Login</span>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </login-form>


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
import LoginForm from '~/components/LoginForm'
export default {
  components: {
    LoginForm
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
<style lang="scss">
.login-dialog {
  transition: all 0.5s;
}
</style>
