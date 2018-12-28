<template>
   <div>
     <v-snackbar
          top
          right
          absolute
          :color="active.type + ' darken-3'"
          :value="visible"
          v-if="list.length > 0"
          @input="removeLast"
          :timeout="2000"
        >
          {{ active.message }}
          <v-btn
            color="pink"
            flat
            @click="removeLast(false)"
          >
            Close
          </v-btn>
        </v-snackbar>
   </div>
</template>

<script>
export default {
  computed: {
    active() {
      return this.$store.state.snacks.list[0]
    },
    list(){
      return this.$store.state.snacks.list
    }
  },
  methods: {
    removeLast: function(payload) {
      if(payload === false){
        this.$store.commit('snacks/removeLast')
      }
    }
  },
  data() {
    return {
      visible: true
    }
  },
}
</script>

<style lang="scss">
  .v-snack-transition-leave-to{
    opacity: 0 !important;
  }
  .v-snack-transition-leave-active{
    transition: all .4s !important;
  }
</style>

