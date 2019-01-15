<template>
  <v-card 
    v-if="$auth.user" 
    height="100%" 
    width="100%">
    <!-- TODO: ^^^ Why the auth middleware is not working, patched it like this ^^^? -->
    <v-card-title class="headline elevation-1">
      <v-flex xs10>
        Your profile
      </v-flex>
      <v-flex
        xs2
        class="subheading text-xs-right text-no-wrap pr-2">
        ID # {{ this.$auth.user.id }}
      </v-flex>
    </v-card-title>
    <v-card-text 
      style="overflow-y: -webkit-paged-y" 
      class="pr-3">
      <v-layout
        fill-height
        wrap
        justify-center
        row>
        <v-flex 
          xs11 
          sm4 
          md3 
          xl2
          class="px-2">
          <profile-pic :pic="image"/>
        </v-flex>
        <v-flex
          class="px-3 mt-1"
          xs12 
          sm8
          md9
          xl10>
          <profile-form/>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
import ProfileForm from '~/components/profile/ProfileForm'
import ProfilePic from '~/components/profile/ProfilePic'

export default {
  middleware: 'auth',
  components: {
    ProfileForm,
    ProfilePic
  },
  watch: {
    user: {
      handler: function(newVal, oldVal) {
        console.log(newVal)
      },
      deep: true
    }
  },
  async fetch({ store, params, app }) {
    let { data } = await app.$axios.get(`/api/users/info/`)
    store.commit('user/setUser', data.data)
  },
  asyncData() {
    return {
      user: {
        name: 'Bryann',
        email: 'bryan@test.com',
        bday: '10/11/12'
      },
      image: require('~/assets/images/placeholder-profile.jpg')
    }
  }
}
/**
 * :class="`${$vuetify.breakpoint.xsOnly ? 'px-3 mt-3' : 'pl-3 pr-1'}`"
 * Not working at the first render
 * Try this at some point
 * https://github.com/vuetifyjs/vuetify/issues/3436
 */
</script>
