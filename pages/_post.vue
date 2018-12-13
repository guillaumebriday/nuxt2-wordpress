<template>
  <section class="container mb-4">
    <div class="w-full">
      <progressive-img
        v-if="featuredImage"
        :src="featuredImage.source_url"
        :placeholder="featuredImage.media_details.sizes.thumbnail.source_url"
        :alt="featuredImage.alt_text"
        class="w-full"/></div>

    <h1
      class="mb-2"
      v-html="post.title.rendered"/>

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

  head() {
    return {
      title: `${this.post.title.rendered} | ${this.$store.state.meta.name}`
    }
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
        return this.post._embedded['wp:featuredmedia'][0]
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
