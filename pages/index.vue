<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        YINEO.FR
      </h1>
      <h2 class="subtitle">
        PHP, VUE.JS, REACT, ANGULARJS
      </h2>
      <div class="links">
        <a href="/cv/" target="_blank" class="button--green">CV</a>
        <a href="/blog/" target="_blank" class="button--grey">Blog</a>
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
