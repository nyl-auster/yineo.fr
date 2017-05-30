<template>
  <section class="container">
    <div>
      <h1 class="title">
        BLOG
      </h1>
      <posts :posts="posts"/>
    </div>
  </section>
</template>

<script>
import content from '~/services/content'
import Posts from '~components/Posts.vue'

export default {
  async asyncData () {
    const result = await content.getPosts()
    return { posts: result.items }
  },
  components: {
    Posts
  }
}
</script>
