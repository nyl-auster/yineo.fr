<template>
  <section class="container">
    <div>
      <h1 class="post__title">
        {{post.fields.title}}
      </h1>
      <div class="post__content">
        {{post.fields.content}}
      </div>
    </div>
  </section>
</template>

<script>

import content from '~/services/content'

export default {

  async asyncData ({ params }) {
    const result = await content.getPost(params.id)
    console.log(result)
    return { post: result }
  }

}
</script>
