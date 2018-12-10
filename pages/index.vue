<template>
  <section class="container">
    <div v-if="!hasPosts">
      <fa icon="spinner" spin />
      Loading ...
    </div>
    <div v-else>
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
    </div>
  </section>
</template>

<script>
import PostList from '~/components/PostList.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    PostList
  },

  computed: {
    ...mapGetters([
      'hasPosts'
    ])
  },

  mounted() {
    this.fetchPosts()
  },

  methods: {
    fetchPosts(order = null) {
      this.$store.dispatch('fetchPosts', { order: order })
    }
  }
}
</script>
