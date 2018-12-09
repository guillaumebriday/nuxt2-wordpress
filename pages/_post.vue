<template>
  <section class="container">
    <div class="w-full">
      <img
        class="w-full"
        src="https://source.unsplash.com/random/1200x600"
        alt="Sunset in the mountains">
    </div>

    <h1 class="mb-2">
      {{ post.title.rendered }}
    </h1>

    <div class="text-grey-darker text-base mb-4">
      Published on {{ date }}
    </div>

    <div v-html="post.content.rendered"/>
  </section>
</template>

<script>
import PostList from '~/components/PostList.vue'
import moment from 'moment'

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
      return moment(this.post.date).format('dddd, MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>
