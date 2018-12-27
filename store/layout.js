export const state = () => ({
  drawer: {
    active: true,
    mini: true
  },
  mobileDrawer: {
    active: false
  }
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer.active = !state.drawer.active
  },
  setDrawer(state, val) {
    state.drawer.active = val
  },
  toggleMobileDrawer(state) {
    state.mobileDrawer.active = !state.mobileDrawer.active
  },
  setMobileDrawer(state, val) {
    state.mobileDrawer.active = val
  }
}
