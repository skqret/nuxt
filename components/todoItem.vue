<template>
  <div class="todo-item">
    <div>
      <input
        :checked="todo.checked"
        class="todo-item__checkbox"
        type="checkbox"
        @click="check(todo)"
        readonly
      />
      <span @click="check(todo)" class="todo-item__title">
        {{ todo.text }}
      </span>
    </div>
    <button @click="remove(todo)" class="todo-item__delete">x</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['todo'],
  name: 'todoItem',

  methods: {
    ...mapActions('todo', ['remove', 'check']),
  },
}
</script>

<style lang="scss">
.todo-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 0;

  &__delete {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
