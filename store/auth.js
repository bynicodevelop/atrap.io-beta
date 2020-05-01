export const state = () => ({
  isAuthenticated: false,
})

export const mutations = {
  auth(state, value) {
    state.isAuthenticated = value !== null
  },
}

export const actions = {
  async set({ commit }, value) {
    commit("auth", value)
  },
}
