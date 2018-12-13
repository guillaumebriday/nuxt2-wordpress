<template>
  <section class="container mb-4">
    <div>
      <div class="m-2 mb-4 flex justify-between align-baseline">
        <div>
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

        <div v-if="isLoading">
          <fa
            icon="spinner"
            spin />
          Loading ...
        </div>
      </div>

      <PostList :posts="$store.state.posts" />
    </div>
  </section>
</template>

<script>
import PostList from '~/components/PostList.vue'

export default {
  components: {
    PostList
  },

  data() {
    return {
      isLoading: false
    }
  },

  async asyncData({ store }) {
    await store.dispatch('fetchPosts')
  },

  methods: {
    fetchPosts(order = null) {
      this.isLoading = true

      this.$store.dispatch('fetchPosts', { order: order }).then(response => {
        this.isLoading = false
      })
    }
  }
}
</script>
