export const state = () => ({
  text: '',
  todoList: [],
  route: '',
})

export const mutations = {
  updateInput(state, value) {
    state.text = value
  },

  addTodo(state) {
    state.todoList.push({
      id: Math.random(),
      text: state.text,
      checked: false,
    })
    state.text = ''
  },

  remove(state, todo) {
    state.todoList.splice(state.todoList.indexOf(todo), 1)
  },

  check(state, { id }) {
    const item = state.todoList.find((item) => item.id === id)
    item.checked = !item.checked
  },

  fromLocalstorage(state, payload) {
    state.todoList = payload
  },

  changeRoute(state, payload) {
    state.route = payload
  },
}

export const actions = {
  addTodo({ state, commit, dispatch }) {
    commit('addTodo')
    dispatch('toLocalStorage')
  },

  remove({ commit, dispatch }, payload) {
    commit('remove', payload)
    dispatch('toLocalStorage')
  },

  check({ commit, dispatch }, payload) {
    commit('check', payload)
    dispatch('toLocalStorage')
  },

  toLocalStorage({ state }) {
    localStorage.setItem('todo', JSON.stringify(state.todoList))
  },

  fromLocalstorage({ state, commit }) {
    commit('fromLocalstorage', JSON.parse(localStorage.getItem('todo')))
  },
}

export const getters = {
  todoListFilter: (state) => {
    if (state.route === 'active') {
      return state.todoList.filter((todo) => !todo.checked)
    } else if (state.route === 'completed') {
      return state.todoList.filter((todo) => todo.checked)
    } else {
      return state.todoList
    }
  },

  countLeft: (state, getters) => {
    return state.todoList.filter((todo) => !todo.checked).length
  },
}
