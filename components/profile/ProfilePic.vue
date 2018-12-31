<template>
  <v-card 
    v-resize="onResize" 
    hover
    raised
    class="mt-1"
  >
    <v-card-title>
      <v-flex class="body-2">
        Avatar / Picture
      </v-flex>
      <v-flex 
        shrink 
        class="body-2 ml-auto">
        <v-icon>face</v-icon>
      </v-flex>
    
    </v-card-title>
    <v-divider/>
    <v-img
      :src="image"
      :lazy-src="image"
      class="elevation-2"
      aspect-ratio="0.90"
    />
    <v-divider/>
    
    <v-card-actions class="my-2 mt-3 pb-3 justify-space-between">
      <v-btn 
        :block="!isMdOrLow"
        :icon="isMdOrLow"
        flat 
        outline 
        color="amber darken-2">
        <v-icon>delete</v-icon>
      </v-btn>
      <v-btn 
        :block="!isMdOrLow"
        :icon="isMdOrLow"
        flat 
        outline 
        color="secondary">
        <v-icon>edit</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      image: require('~/assets/images/placeholder-profile.jpg'),
      isMdOrLow: false
    }
  },
  beforeMount() {
    this.onResize()
  },
  methods: {
    onResize() {
      this.isMdOrLow = this.$vuetify.breakpoint.mdAndDown
    }
  }
}
</script>

<style>
</style>
