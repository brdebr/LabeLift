export const state = () => ({
  drawer: {
    active: true,
    mini: true
  },
  rDrawer: {
    active: false,
    contentComponent: 'VuetifyLogo'
  }
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer.active = !state.drawer.active
  },
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}

// export const getters = {
//   drawerIsActive(state) {
//     return state.drawer.active
//   }
// }
// VUEX PLACEHOLDER EXAMPLE
