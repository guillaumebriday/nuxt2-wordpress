
<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg m-2 w-full md:w-1/4">
    <img
      class="w-full"
      src="https://source.unsplash.com/random/1200x600"
      alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{ post.title.rendered }}
      </div>
      <div
        class="text-grey-darker text-base mb-2"
        v-html="post.excerpt.rendered"/>

      <nuxt-link
        :to="post.slug"
        class="inline-block align-baseline font-bold text-sm text-orange hover:text-orange-darker">Voir plus</nuxt-link>
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
  }
}
</script>
