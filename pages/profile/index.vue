<template>
  <v-layout
    column>
    <v-flex
      xs12>
      <v-card>
        <v-card-title class="headline">Profile</v-card-title>
        <v-card-text>
          <p>
            <span>
              User ID:
            </span>
            <span>
              {{ this.$auth.user.id}}
            </span>
          </p>
          <p>
            <span>
              User name:
            </span>
            <span>
              {{ this.$auth.user.name}}
            </span>
          </p>
          <p>
            <span>
              User email:
            </span>
            <span>
              {{ this.$auth.user.email}}
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
