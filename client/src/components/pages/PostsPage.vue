<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Posts</h1>
        <div class="form-group" v-if="posts.length">
          <router-link :to="{ name: 'NewPost' }">
            <button
              class="btn btn-success form-control"
              type="button"
            >
              add new post
            </button>
          </router-link>
        </div>
        <section class="card text-white bg-success mb-3" v-if="posts.length">
          <div class="card-header">
            list of posts
          </div>
          <table class="table table-striped">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            <tr v-for="(post,index) in posts" :key="index">
              <td>{{ post.title }}</td>
              <td>{{ post.description }}</td>
              <td>
                <router-link :to="{ name: 'EditPost', params: { id: post._id } }">
                  <button  class="btn btn-primary btn-sm" type="button">edit post</button>
                </router-link>
                <button
                  class="btn btn-danger btn-sm"
                  type="button"
                  @click="removePost(post._id)"
                >
                  delete
                </button>
              </td>
            </tr>
          </table>
        </section>
        <section class="card bg-danger mb-3 p-3" v-else>
          <p>There are no posts ... Lets add one now!</p>
          <div>
            <router-link :to="{ name: 'NewPost' }">
              <button  class="btn btn-success btn-sm" type="button">
                add new post
              </button>
            </router-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import PostsService from '@/services/PostsService'
  export default {
    name: 'PostsPage',
    data () {
      return {
        posts: []
      }
    },
    methods: {
      async getPosts () {
        const response = await PostsService.fetchPosts()
        this.posts = response.data.posts
      },
      async removePost (value) {
        await PostsService.deletePost(value)
        this.getPosts()
      }
    },
    mounted () {
      this.getPosts()
    }
  }
</script>

<style scoped>

</style>
