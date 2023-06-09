export const state = () => ({
  user: [],
  user_post: [],
  comments: [],
  todos: [],
  photos: [],
  albums: [],
})

export const getters = {
  user: state => state.user,
  user_post: state => state.user_post,
  comments: state => state.comments,
  todos: state => state.todos,
  photos: state => state.photos,
  albums: state => state.albums,
}

export const mutations = {
  setUserData(state, users) {
    state.user = users
  },
  setPostUser(state, post) {
    state.user_post = post
  },
  setComments(state, comments) {
    state.comments = comments
  },
  setTodos(state, todo) {
    state.todos = todo
  },
  setPhotos(state, photo) {
    state.photos = photo
  },
  setAlbums(state, album) {
    state.albums = album
  },
}

export const actions = {
  async getAlbums({commit}) {
    await this.$axios.get('/albums')
      .then(res => {
        if (res.status === 200) {
          commit("setAlbums", res.data)
        }
      })
      .catch(({response}) => {
        console.log(response)
      })
  },
  async getPhotos({commit}) {
    await this.$axios.get("/photos?_limit=100")
      .then(res => {
        if (res.status === 200) {
          commit("setPhotos", res.data)
        }
      })
      .catch(({response}) => {
        console.log(response)
      })
  },
  async getTodos({commit}) {
    await this.$axios.get("/todos")
      .then(res => {
        if (res.status === 200) {
          commit("setTodos", res.data)
        }
      })
      .catch(({response}) => {
        console.log(response)
      })
  },
  async getComments({commit}) {
    await this.$axios.get("/comments")
      .then(res => {
        if (res.status === 200) {
          commit("setComments", res.data)
        }
      })
      .catch(({response}) => {
        console.log(response)
      })
  },
  async postUser({commit}) {
    await this.$axios.get('/posts')
      .then(res => {
        if (res.status === 200) {
          commit("setPostUser", res.data)
        }
      })
      .catch(({response}) => {
        console.log(response)
      })
  },
  async getUserData({commit}) {
    await this.$axios.get('/users')
      .then(res => {
        if (res.status === 200) {
          commit("setUserData", res.data)
          this.$toast.success(res.status)
        }
      })
      .catch(({response}) => {
        console.log(response)
      })
  },
}
