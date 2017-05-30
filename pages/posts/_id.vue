<template>
  <section class="container">
    <div>
      <h1 class="title is-3">
        {{post.fields.title}}
      </h1>
      <div v-html="post.fields.content" class="content">

      </div>
    </div>
  </section>
</template>

<script>

import content from '~/services/content'

export default {

  async asyncData ({ params }) {
    const result = await content.getPost(params.id)
    return { post: result }
  }

}
</script>
