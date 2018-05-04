<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>{{ title }}</h2>
        <router-link :to="{ name: 'Posts' }">go to list of posts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data () {
      return {
        title: 'Simple CRUD Application'
      }
    }
  }
</script>

<style scoped>

</style>
