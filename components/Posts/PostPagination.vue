<template>
  <div v-if="$store.state.pagination.totalPages > 1" class="flex justify-between mb-4">
    <span :class="[previousPage ? 'cursor-pointer text-orange hover:text-orange-darker' : 'text-grey']" @click="handlePrevious">Previous</span>

    <p>{{ $store.state.pagination.currentPage }} / {{ $store.state.pagination.totalPages }}</p>

    <span :class="[nextPage ? 'cursor-pointer text-orange hover:text-orange-darker' : 'text-grey']" @click="handleNext">Next</span>
  </div>
</template>

<script>
export default {
  methods: {
    handlePrevious() {
      if (this.previousPage) {
        this.$store.dispatch('fetchPosts', { page: this.previousPage })
      }
    },

    handleNext() {
      if (this.nextPage) {
        this.$store.dispatch('fetchPosts', { page: this.nextPage })
      }
    }
  },

  computed: {
    previousPage() {
      let previousPage = this.$store.state.pagination.currentPage - 1

      if (previousPage <= this.$store.state.pagination.totalPages) {
        return previousPage
      }
    },

    nextPage() {
      let nextPage = this.$store.state.pagination.currentPage + 1

      if (nextPage <= this.$store.state.pagination.totalPages) {
        return nextPage
      }
    }
  }
}
</script>

