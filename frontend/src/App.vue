<template>
  <v-app>
    <v-toolbar app flat clipped-left dark class="blue-grey darken-1">
      <v-toolbar-side-icon class="light-blue--text text--lighten-3" @click="drawer = !drawer"/>
      <v-toolbar-title class="headline">
        <span>LabeLift</span>
      </v-toolbar-title>
      <v-spacer/>
      <v-btn depressed color="light-green darken-1">
        <span class="mr-2">Login</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app :mini-variant="mini" hide-overlay clipped v-model="drawer" width="225">
      <v-layout column justify-space-between fill-height>
        <v-list>
          <v-list-tile v-for="item in items" :key="item.title" @click>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list class="mt-auto">
          <v-list-tile @click="mini = !mini">
            <v-list-tile-action>
              <v-icon>{{mini ? "last_page" : "first_page"}}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-layout>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "dashboard" },
        { title: "Account", icon: "account_circle" },
        { title: "About", icon: "info" }
      ],
      drawer: true,
      mini: true
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
