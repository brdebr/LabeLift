<template>
  <v-footer
    height="auto"
    class="grey ligthte-2 px-3"
    app
  >
    <v-layout
      row
    >
      <v-flex
        align-self-center
      >
        <span class="mr-2">Bryan de Oliveira</span>
        <span>&copy; 2018</span>
      </v-flex>

      <v-spacer/>

      <v-btn
        round
        outline
        href="https://github.com/brdebr/LabeLift"
        flat>
        <span class="mr-2 body-1">Source code</span>
        <fa
          :icon="['fab','github']"
          style="font-size: 24px" />
      </v-btn>

    </v-layout>
  </v-footer>
</template>

<script>
export default {}
</script>

<style>
</style>
