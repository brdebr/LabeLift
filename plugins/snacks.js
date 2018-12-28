export default ({ store }, inject) => {
  let snackbars = {
    info: message => {
      store.commit('snacks/info', message)
    },
    success: message => {
      store.commit('snacks/success', message)
    },
    show: message => {
      store.commit('snacks/show', message)
    },
    error: message => {
      store.commit('snacks/error', message)
    },
    removeLast: () => {
      store.commit('snacks/removeLast')
    }
  }
  inject('snackbar', snackbars)
}
