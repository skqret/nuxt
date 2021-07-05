<template>
  <div class="container">
    <h1 class="title">todos</h1>

    <input
      v-model="input"
      type="text"
      class="input"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo"
    />

    <todo-item
      v-for="(todo, index) in todoListFilter"
      :todo="todo"
      :key="index"
    />

    <info-block />
  </div>
</template>

<script>
import TodoItem from '@/components/todoItem'
import InfoBlock from '@/components/infoBlock'
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  validate({ params }) {
    console.log(params)
    return true
  },

  components: { InfoBlock, TodoItem },

  computed: {
    ...mapGetters('todo', ['todoListFilter']),
    input: {
      get() {
        return this.$store.state.todo.text
      },
      set(value) {
        this.$store.commit('todo/updateInput', value)
      },
    },
  },

  methods: {
    ...mapActions('todo', ['addTodo', 'fromLocalstorage']),
    ...mapMutations('todo', ['changeRoute']),
  },

  mounted() {
    this.fromLocalstorage()
    this.changeRoute(this.$route.params.id)
  },
}
</script>

<style lang="scss">
.container {
  width: 400px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input {
  display: block;
  height: 40px;
  font-size: 20px;
}
</style>
