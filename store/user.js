export const state = () => ({
  users: [],
})

export const mutations = {
  setUsers(state, payload) {
    state.users = payload
  },
}

export const actions = {
  fetchUsers({ commit }) {
    return new Promise(async (resolve) => {
      const users = await this.$axios.$get(
        'https://jsonplaceholder.typicode.com/users/'
      )
      commit('setUsers', users)
      resolve()
    })
  },
}

export const getters = {}
