export const state = () => ({
  user: {
    id: null,
    name: null,
    lastName: null,
    email: null,
    avatar: null
  }
})

export const mutations = {
  setUser(state, val) {
    state.user.id = val.id
    state.user.name = val.name
    state.user.lastName = val.lastName
    state.user.email = val.email
    state.user.avatar = val.avatar
  }
}

export const actions = {
  async fetchUser({ commit }) {
    await this.$axios.get(`/api/users/info/`).then(res => {
      if (res.status === 200) {
        commit('setUser', res.data.data)
      }
    })
  }
}
