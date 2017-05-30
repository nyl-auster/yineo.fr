<template>
  <section class="container">
    <div>
      <h1 class="title is-3">
        {{post.fields.title}}
      </h1>
      <div v-if="post.fields.image" class="post__image">
          <img :src="post.fields.image.fields.file.url" />
      </div>
      <div v-html="markdown(post.fields.content)" class="content">

      </div>
    </div>
  </section>
</template>

<script>

import content from '~/services/content'

export default {

  async asyncData ({ params }) {
    const result = await content.getPostBySlug(params.slug)
    //  const imageUrl =
    console.log(result.fields.image)
    return { post: result }
  }

}
</script>
