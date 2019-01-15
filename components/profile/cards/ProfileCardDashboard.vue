<template>
  <v-card
    flat
    color="light-blue lighten-5"
    class="mb-2 round">
    <v-card-title>
      <v-layout row>
        <v-flex>
          <div class="headline font-weight-medium">
            Dashboard
          </div>
          <span class="body-1 mb-1">Some subheader</span>
        </v-flex>
        <v-flex 
          shrink 
          class="ml-auto mt-1 mr-1">
          <transition 
            name="flip-y" 
            mode="out-in">
            <div :key="active">
              <v-btn 
                color="secondary darken-2" 
                icon 
                outline 
                small
                @click.stop="active = !active">
                <v-icon size="14">
                  {{ !active ? "more_horiz" : "keyboard_capslock" }}
                </v-icon>
              </v-btn>
            </div>
          </transition>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-divider v-show="active"/>
    <v-slide-y-transition>
      <v-card-text 
        v-show="active" 
        class="pt-3">
        <p style="white-space:pre-line">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat commodo risus et dignissim. Cras non lectus id ligula pellentesque pellentesque. Mauris vulputate vehicula enim vel aliquet. Sed vitae risus fringilla ligula tempus venenatis. Quisque nec laoreet arcu. Curabitur nisi orci, volutpat nec blandit sed, laoreet eu ante. Vivamus non orci vitae urna viverra rutrum vel eget sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam interdum mauris et metus ultricies congue.</p>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      active: true
    }
  }
}
</script>

<style>
</style>
