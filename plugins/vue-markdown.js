import Vue from 'vue'
const marked = require('marked')

// add a markdownToHtml method on ALL vue components
Vue.mixin({
  methods: {
    markdownToHtml: function (input) {
      return marked(input)
    }
  }
})
