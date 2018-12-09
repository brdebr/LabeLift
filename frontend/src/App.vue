<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon/>
      <v-toolbar-title class="headline">
        <span>LabeLift</span>
      </v-toolbar-title>
      <v-spacer/>
      <v-btn>
        <span class="mr-2">Login</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
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
      //
    };
  }
};
</script>
