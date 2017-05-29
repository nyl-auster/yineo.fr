<template>
  <section class="posts">
    <div v-for="post in posts" class="post-teaser">
      <h2 class="subtitle">
        {{post.fields.title}}
      </h2>
      <p>
        {{post.fields.content}}
      </p>
    </div>
  </section>
</template>

<script>

export default {
  props: ['posts']
}

</script>
