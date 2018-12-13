<template>
  <div class="flex flex-wrap -mx-2">
    <PostCard
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
    />
  </div>
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
