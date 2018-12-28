export const state = () => ({
  list: []
})

export const mutations = {
  clearSnack(state, message) {
    state.list = state.list.filter(function(value, i, array) {
      return !(message === value.message)
    })
  },
  removeLast(state) {
    if (state.list.length > 0) state.list.shift()
  },
  success(state, message) {
    state.list.push({
      message,
      type: 'success'
    })
  },
  info(state, message) {
    state.list.push({
      message,
      type: 'info'
    })
  },
  show(state, message) {
    state.list.push({
      message,
      type: 'show'
    })
  },
  error(state, message) {
    state.list.push({
      message,
      type: 'error'
    })
  }
}
