<template>
  <v-navigation-drawer
    :mini-variant="miniVariant"
    :value="display"
    clipped
    width="275"
    fixed
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
      <v-btn
        icon
        outline
        class="mx-auto mb-3 light-blue--text text--darken-3"
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'" />
      </v-btn>
    </v-layout>

  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    display: { type: Boolean, default: false },
    items: { type: Array, default: () => [] }
  },
  data() {
    return {
      miniVariant: true
    }
  }
}
</script>

<style>
</style>
