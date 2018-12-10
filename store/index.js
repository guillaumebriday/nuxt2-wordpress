import Vuex from 'vuex'

const store = () =>
  new Vuex.Store({
    state: {
      post: null,
      posts: []
    },

    getters: {
      hasPosts: state => {
        return state.posts.length !== 0
      }
    },

    mutations: {
      setPost(state, data) {
        state.post = data
      },
      setPosts(state, data) {
        state.posts = data
      }
    },

    actions: {
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

      fetchPosts({ commit }, params) {
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
