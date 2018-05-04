<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <section class="edit">
  <h1>edit post</h1>
    <form @submit.prevent="editPost()">
    <div class="form-group">
      <input
        class="form-control"
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        v-model.trim="post.title"
      >
    </div>
    <div class="form-group">
      <input
        class="form-control"
        type="text"
        name="description"
        id="description"
        placeholder="Description"
        v-model.trim="post.description"
      >
    </div>
    <div class="form-group">
      <button
        class="btn btn-primary form-control"
        type="submit"
        name="editPost"
      >
        edit post
      </button>
    </div>
    <div>
      <router-link :to="{ name: 'Posts' }">
        <button  class="btn btn-success form-control" type="button">
          go to list of posts
        </button>
      </router-link>
    </div>
    </form>
  </section>
      </div>
    </div>
  </div>
</template>

<script>
  import PostsService from '@/services/PostsService'
  export default {
    name: 'EditPostPage',
    data () {
      return {
        post: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      async getPost () {
        const response = await PostsService.getPost({ id: this.$route.params.id })
        this.post.title = response.data.title
        this.post.description = response.data.description
      },
      async editPost () {
        if (this.post.title !== '' && this.post.description !== '') {
          await PostsService.updatePost({
            id: this.$route.params.id,
            title: this.post.title,
            description: this.post.description
          })
          this.$router.push({ name: 'Posts' })
        }
      }
    },
    mounted () {
      this.getPost()
    }
  }
</script>

<style scoped>

</style>
