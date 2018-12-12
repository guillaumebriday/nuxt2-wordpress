<template>
  <section class="container mb-4">
    <div class="w-full">
      <img
        v-if="featuredImage"
        :src="featuredImage"
        class="w-full"
        alt="Sunset in the mountains">
    </div>

    <h1 class="mb-2">
      {{ post.title.rendered }}
    </h1>

    <div class="text-grey-darker text-base mb-4">
      Published on <strong>{{ date }}</strong> by <strong>{{ author }}</strong> in <strong>{{ category }}</strong>
    </div>

    <div v-html="post.content.rendered"/>
  </section>
</template>

<script>
import PostList from '~/components/PostList.vue'
import { parse, format } from 'date-fns'

export default {
  components: {
    PostList
  },

  async asyncData({ store, params }) {
    await store.dispatch('fetchPost', params)
  },

  computed: {
    post() {
      return this.$store.state.post
    },

    date() {
      return format(parse(this.post.date), 'dddd, MMMM Do YYYY, h:mm:ss a')
    },

    featuredImage() {
      if (this.post._embedded['wp:featuredmedia']) {
        return this.post._embedded['wp:featuredmedia'][0].source_url
      }
    },

    category() {
      if (this.post._embedded['wp:term']) {
        return this.post._embedded['wp:term'][0][0].name
      }
    },

    author() {
      return this.post._embedded['author'][0].name
    }
  }
}
</script>
