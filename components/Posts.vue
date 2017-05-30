<template>
  <section class="posts">
    <div v-for="post in posts" class="post--teaser">
      <h2 class="title is-3">
        {{post.fields.title}}
      </h2>
      <div class="post__readmore">
        <nuxt-link class="button is-light" :to="{ name: 'posts-id', params: { id: post.sys.id } }"> Lire plus </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: ['posts']
}

</script>
