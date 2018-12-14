<template>
  <div v-if="posts.length">

    <div class="flex flex-wrap -mx-2">
      <post-card
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
      />
    </div>
  </div>

  <p v-else>No post</p>
</template>

<script>
import PostCard from './PostCard'

export default {
  components: {
    PostCard
  },

  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
