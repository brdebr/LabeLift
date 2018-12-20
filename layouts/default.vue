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

      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-dialog
        v-model="login.dialog"
        lazy
        :persistent="login.loading"
        max-width="600px"
        class="login-dialog">
        <v-btn
          slot="activator"
          depressed
          color="light-green darken-1">
          <span class="mr-2">Login</span>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
        <v-card class="login-dialog">
          <v-card-title>
            <span class="headline">Login</span>
          </v-card-title>
          <v-card-text v-if="!login.loading">
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex
                  xs12
                  sm6
                  md4>
                  <v-text-field
                    label="Legal first name*"
                    required/>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md4>
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"/>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md4>
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  />
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Email*"
                    required/>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Password*"
                    type="password"
                    required/>
                </v-flex>
                <v-flex
                  xs12
                  sm6>
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  />
                </v-flex>
                <v-flex
                  xs12
                  sm6>
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-scale-transition mode="out-in">
            <v-card-text v-if="login.loading">
              <p>
                Handling your request, please stand by...
              </p>
              <p>
                <v-progress-linear :indeterminate="true"/>
              </p>
            </v-card-text>
          </v-scale-transition>
          <v-card-actions v-if="!login.loading">
            <v-spacer/>
            <v-btn
              color="blue darken-1"
              flat
              @click="login.dialog = false">Close</v-btn>
            <v-btn
              color="blue darken-1"
              flat
              @click="login.loading = true">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


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
      title: 'LabeLift',
      login: {
        dialog: false,
        loading: false,
      }
    }
  },
}
</script>
<style lang="scss">
.login-dialog {
  transition: all 0.5s;
}
</style>
