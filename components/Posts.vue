<template>
  <section class="posts">
    <div v-for="post in posts" class="post">
      <h2 class="title is-3">
        {{post.fields.title}}
      </h2>
      <div class="post__readmore">
        <nuxt-link class="button is-primary" :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }"> Lire l'article </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: ['posts']
}

</script>
