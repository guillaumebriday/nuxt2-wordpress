<template>
  <section class="container mb-4">
    <div>
      <div class="mb-4 flex justify-between flex-wrap">
        <div class="flex flex-wrap align-baseline">
          <div class="mr-2 mb-2">
            Search:
            <input
              v-model="searchForm"
              type="text"
              class="shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              @input="handleSearch">
          </div>

          <div>
            Sort by:
            <button
              class="bg-orange hover:bg-orange-dark text-white font-bold py-2 px-4 rounded"
              @click="fetchPosts({ order: 'asc' })">
              Older
            </button>

            <button
              class="bg-orange hover:bg-orange-dark text-white font-bold py-2 px-4 rounded"
              @click="fetchPosts({ order: 'desc' })">
              Newer
            </button>
          </div>
        </div>

        <div v-if="isLoading">
          <fa
            icon="spinner"
            spin />
          Loading ...
        </div>
      </div>

      <PostList :posts="$store.state.posts" />
    </div>
  </section>
</template>

<script>
import PostList from '~/components/PostList.vue'
import { debounce } from 'lodash'

export default {
  components: {
    PostList
  },

  data() {
    return {
      isLoading: false,
      searchForm: null
    }
  },

  async asyncData({ store }) {
    await store.dispatch('fetchPosts')
  },

  methods: {
    fetchPosts(params) {
      this.isLoading = true

      this.$store.dispatch('fetchPosts', params).then(response => {
        this.isLoading = false
      })
    },

    handleSearch: debounce(function() {
      this.fetchPosts({ search: this.searchForm })
    }, 300)
  }
}
</script>
