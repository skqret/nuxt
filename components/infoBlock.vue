<template>
  <div class="info">
    <div class="info__item-left">{{ countLeft }} item left</div>

    <div class="info__link">
      <nuxt-link to="/todo/">all</nuxt-link>
      <nuxt-link to="/todo/active">active</nuxt-link>
      <nuxt-link to="/todo/completed">completed</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'infoBlock',
  computed: {
    ...mapGetters('todo', ['countLeft']),
  },
}
</script>

<style></style>
