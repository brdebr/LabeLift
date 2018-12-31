<template>
  <v-card
    flat
    color="teal lighten-5"
    class="mb-2 round">
    <v-card-title class="pb-1">
      <div 
        class="headline" 
        style="font-size: 22px !important">
        Personal data
      </div>
    </v-card-title>
    <v-card-text class="pt-1">
      <v-container 
        class="pa-0" 
        fill-height>
        <v-layout
          row
          align-center
          class="user-info"
          wrap>
          <v-flex 
            xs12 
            sm12
            md6
            xl4>
            <span class="body-2">
              Name:
            </span> 
            <span>
              {{ user.name }}
            </span>
          </v-flex>
          <v-flex 
            xs12 
            sm12
            md6
            xl4>
            <span class="body-2">
              Last name:
            </span> 
            <span>
              {{ user.lastName }}
            </span>
          </v-flex>
          <v-flex 
            xs12 
            xl4>
            <span class="body-2 mr-1">
              Email:
            </span> 
            <span>
              {{ user.email }}
            </span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
</style>
