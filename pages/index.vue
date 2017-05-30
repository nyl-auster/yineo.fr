<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        YINEO.FR
      </h1>
      <h2 class="subtitle">
       VUE.JS, ANGULARJS, NODEJS, PHP, JAVASCRIPT
      </h2>
      <div class="links">
        <nuxt-link class="button--green" to="/cv/">CV</nuxt-link>
        <nuxt-link class="button--grey" to="/posts/">Blog</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
