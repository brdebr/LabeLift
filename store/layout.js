export const state = () => ({
  drawer: {
    active: true,
    mini: true
  }
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer.active = !state.drawer.active
  },
  setDrawer(state, val) {
    state.drawer.active = val
  },
  toggleMini(state) {
    state.drawer.mini = !state.drawer.mini
  }
}
