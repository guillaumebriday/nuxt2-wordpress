<template>
  <section class="container">
    <div class="m-2 mb-4">
      Sort by:
      <button
        class="bg-orange hover:bg-orange-dark text-white font-bold py-2 px-4 rounded"
        @click="fetchPosts('asc')">
        Older
      </button>

      <button
        class="bg-orange hover:bg-orange-dark text-white font-bold py-2 px-4 rounded"
        @click="fetchPosts('desc')">
        Newer
      </button>
    </div>

    <PostList :posts="$store.state.posts" />
  </section>
</template>

<script>
import PostList from '~/components/PostList.vue'

export default {
  components: {
    PostList
  },

  async asyncData({ store }) {
    await store.dispatch('fetchPosts', {})
  },

  methods: {
    fetchPosts(order) {
      this.$store.dispatch('fetchPosts', { order: order })
    }
  }
}
</script>
