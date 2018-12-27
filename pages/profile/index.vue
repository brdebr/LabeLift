<template>
  <v-layout
    column>
    <v-flex
      xs12>
      <v-card>
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
        <v-card-text>
          <p>
            <span >
              User ID:
            </span>
            <span>
              {{ this.$auth.user.id }}
            </span>
          </p>
          <p>
            <span>
              User name:
            </span>
            <span>
              {{ this.$auth.user.name }}
            </span>
          </p>
          <p>
            <span>
              User email:
            </span>
            <span>
              {{ this.$auth.user.email }}
            </span>
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  middleware: 'auth'
}
</script>
