<template>
  <v-menu
    bottom
    transition="slide-y-transition"
    left>
    <v-btn
      slot="activator"
      round
      :class="lg ? 'mx-auto' : '' "
      light
      color="grey lighten-3">
      <v-layout
        align-center
        row>
        <span class="mx-3">{{ this.$auth.user.name }}</span>
        <v-avatar
          color="primary"
          size="27">
          <v-icon
            size="17"
            color="white">account_circle</v-icon>
        </v-avatar>
      </v-layout>
    </v-btn>

    <v-list
      subheader>
      <v-subheader inset>Profile Menu</v-subheader>
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
    props: {
    lg: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    profile() {
      this.$router.push('/profile')
    },
    async logout() {
      await this.$auth.logout()
      this.$toast.show('Logged out...', { icon: 'fingerprint' })
    }
  }
}
</script>

<style>
</style>
