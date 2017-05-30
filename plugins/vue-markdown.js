import Vue from 'vue'
const marked = require('marked')

Vue.mixin({
  methods: {
    markdown: function (input) {
      return marked(input)
    }
  }
})
