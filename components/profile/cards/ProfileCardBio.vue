<template>
  <v-card
    flat
    class="round"
    color="light-green lighten-5">
    <v-card-title class="pb-1">
      <div class="headline font-weight-medium">
        Bio
      </div>
    </v-card-title>
    <v-card-text class="pt-1">
      <span style="white-space: pre-line;">{{ user.bio }}</span>
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
