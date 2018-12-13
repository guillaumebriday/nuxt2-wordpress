import Vuex from 'vuex'

const store = () =>
  new Vuex.Store({
    state: {
      meta: null,
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
            params: {
              slug: params.post
            }
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
        return this.$axios
          .get('/wp/v2/posts?_embed', {
            params: {
              order: params.order
            }
          })
          .then(({ data }) => {
            commit('setPosts', data)
            return data
          })
          .catch(error => {
            return Promise.reject(error)
          })
      }
    }
  })

export default store
