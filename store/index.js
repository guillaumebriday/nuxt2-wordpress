import Vuex from 'vuex'

const store = () =>
  new Vuex.Store({
    state: {
      meta: null,
      isLoading: false,
      pagination: {
        count: 0,
        totalPages: 1,
        currentPage: 1
      },
      post: null,
      posts: []
    },

    mutations: {
      setMeta(state, data) {
        state.meta = data
      },
      setPost(state, data) {
        state.post = data
      },
      setPosts(state, data) {
        state.posts = data
      },
      setPagination(state, data) {
        state.pagination = data
      },
      setLoading(state, data) {
        state.isLoading = data
      }
    },

    actions: {
      async nuxtServerInit({ commit }) {
        let meta = await this.$axios.get('/')
        commit('setMeta', meta.data)
      },

      fetchPost({ commit }, params) {
        return this.$axios
          .get('/wp/v2/posts?_embed', {
            params: params
          })
          .then(({ data }) => {
            commit('setPost', data[0])
            return data[0]
          })
          .catch(error => {
            return Promise.reject(error)
          })
      },

      fetchPosts({ commit }, params = {}) {
        commit('setLoading', true)

        return this.$axios
          .get('/wp/v2/posts?_embed', {
            params: params
          })
          .then(({ data, headers }) => {
            commit('setLoading', false)
            commit('setPosts', data)
            commit('setPagination', {
              count: headers['x-wp-total'],
              totalPages: headers['x-wp-totalpages'],
              currentPage: params.page || 1
            })

            return data
          })
          .catch(error => {
            return Promise.reject(error)
          })
      }
    }
  })

export default store
