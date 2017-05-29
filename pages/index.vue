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
        <a href="/creation-de-site-web" target="_blank" class="button--green">Création de site web</a>
        <a href="/expertise" target="_blank" class="button--grey">Expertise</a>
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
