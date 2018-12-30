<template>
  <v-navigation-drawer
    :mini-variant="$store.state.layout.drawer.mini"
    :value="$store.state.layout.drawer.active"
    clipped
    width="275"
    fixed
    app
    @input="val => $store.commit('layout/setDrawer',val)"
  >
    <v-layout
      column
      justify-space-between
      fill-height>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon
              class="ml-3 mr-3"
              v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title
              class="ml-2"
              v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <transition 
        name="flip" 
        mode="out-in">
        <div 
          :key="$store.state.layout.drawer.mini" 
          class="mx-auto mb-3">
          <v-btn
            icon
            outline
            class="light-blue--text text--darken-3"
            @click.stop="$store.commit('layout/toggleMini')"
          >
            <v-icon v-html="$store.state.layout.drawer.mini ? 'chevron_right' : 'chevron_left'" />
          </v-btn>
        </div>
      </transition>
    </v-layout>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    items: { type: Array, default: () => [] }
  }
}
</script>

<style lang="scss" scoped>
.flip-enter {
  transform: rotateY(90deg);
}
.flip-enter-active,
.flip-leave-active {
  transition: all 0.3s;
  transform-style: preserve-3d;
}
.flip-leave-to {
  transform: rotateY(90deg);
}
</style>
