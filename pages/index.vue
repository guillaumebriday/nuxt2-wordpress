<template>
  <section class="container">
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
    await store.dispatch('fetchPosts')
  }
}
</script>
