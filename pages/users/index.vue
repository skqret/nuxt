<template>
  <div>
    <nuxt-link
      class="user"
      v-for="user in users"
      :to="`users/${user.id}`"
      :key="user.id"
    >
      {{ user.name }}
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // async asyncData({ store }) {
  //
  // },

  async fetch({ store }) {
    if (store.state.user.users.length === 0) {
      await store.dispatch('user/fetchUsers')
    }
  },

  computed: {
    ...mapState('user', ['users']),
  },
}
</script>

<style lang="scss">
.user {
  display: block;
}
</style>
