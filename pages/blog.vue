<template>
  <section class="container">
    <div>
      <h1 class="title">
        BLOG
      </h1>
      <h2 class="subtitle">
        Les derniers billets de blog
      </h2>
      <posts :posts="posts"/>
    </div>
  </section>
</template>


<script>
import content from '~/services/content'
import Posts from '~components/Posts.vue'

export default {
  data () {
    return {
      posts: []
    }
  },
  created () {
    content.getPosts().then((result) => {
      this.posts = result.items
      console.log(this.posts)
    })
  },
  components: {
    Posts
  }
}
</script>
