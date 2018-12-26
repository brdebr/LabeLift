<template>
  <v-navigation-drawer
    :value="true"
    clipped
    width="275"
    class="light-blue lighten-5"
    fixed
    right
    stateless
    app
    @input="val => $emit('setDrawer',val)"
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
    </v-layout>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    items: { type: Array, default: () => [] }
  },
}
</script>

<style>
</style>
