<template>
  <v-menu
    bottom
    transition="slide-y-transition"
    left>

    <v-avatar
      slot="activator"
      color="secondary">
      <v-icon>
        account_circle
      </v-icon>
    </v-avatar>

    <v-list
      subheader>
      <v-subheader 
        class="text-no-wrap text-truncate" 
        inset>{{ this.$auth.user.name }}</v-subheader>
      <v-divider/>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        avatar
        @click="item.action"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <fa
            :icon="item.icon.name"
            color="#BDBDBD"
            fixed-width/>
        </v-list-tile-action>
        <!-- <v-divider v-if="item.divider" /> -->
      </v-list-tile>

    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Profile',
          icon: {
            name: 'user-circle'
          },
          divider: true,
          action: this.profile
        },
        {
          title: 'Logout',
          icon: {
            name: 'sign-out-alt'
          },
          divider: false,
          action: this.logout
        }
      ]
    }
  },
  methods: {
    profile() {
      this.$router.push('/profile')
    },
    async logout() {
      await this.$auth.logout()
      this.$snackbar.show('Logged out...', { icon: 'fingerprint' })
    }
  }
}
</script>

<style>
</style>
