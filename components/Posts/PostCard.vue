
<template>
  <div class="md:w-1/3 lg:w-1/4 w-full p-2">
    <div class="rounded overflow-hidden shadow-lg flex flex-col bg-white h-full">
      <img
        v-if="featuredImage"
        :src="featuredImage.media_details.sizes.medium.source_url"
        :alt="featuredImage.alt_text"
        class="w-full">

      <div class="flex flex-col flex-grow px-6 py-4 justify-between">
        <div>
          <h2
            class="font-bold text-xl mb-2"
            v-html="post.title.rendered"/>

          <div
            class="text-grey-darker text-base mb-2"
            v-html="post.excerpt.rendered"/>
        </div>

        <div>
          <nuxt-link
            :to="post.slug"
            class="inline-block align-baseline font-bold text-sm text-orange hover:text-orange-darker">Voir plus</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  computed: {
    featuredImage() {
      if (this.post._embedded['wp:featuredmedia']) {
        return this.post._embedded['wp:featuredmedia'][0]
      }
    }
  }
}
</script>
