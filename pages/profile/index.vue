<template>
  <v-card 
    height="100%" 
    width="100%">
    <v-card-title class="headline elevation-1">
      <v-flex xs10>
        Profile
      </v-flex>
      <v-flex
        xs2
        class="subheading text-xs-right pr-2">
        ID # {{ this.$auth.user.id }}
      </v-flex>
    </v-card-title>
    <v-card-text style="overflow-y: -webkit-paged-y">
      <v-layout
        fill-height
        wrap
        row>
        
        <v-card
          xs12 
          md3>
          <v-card-title>
            <v-flex class="body-2">
              Picture/Avatar
            </v-flex>
            <v-flex 
              shrink 
              class="body-2 ml-auto">
              <v-icon>face</v-icon>
            </v-flex>
          
          </v-card-title>
          <v-divider/>
          <v-card-media
            :src="image"
            :lazy-src="image"
            class="elevation-2"
            aspect-ratio="0.90"
          />
          <v-divider/>
          
          <v-card-actions class="my-2 mt-3">
            <v-btn 
              block 
              flat 
              outline 
              color="amber darken-2">
              <v-icon>clear</v-icon>
            </v-btn>
            <v-btn 
              block 
              flat 
              outline 
              color="secondary">
              <v-icon>edit</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-flex
          xs12
          md9
          class="pl-4">
          <profile-form/>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
import ProfileForm from '~/components/profile/ProfileForm'

export default {
  middleware: 'auth',
  components: {
    ProfileForm
  },
  watch: {
    user: {
      handler: function(newVal, oldVal) {
        console.log(newVal)
      },
      deep: true
    }
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
</script>
