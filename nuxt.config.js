const content = require('./services/content')

/**
 * Generate routes like ""/posts/xxxxx" so that nuxtjs can generate them
 */
function generateRoutes() {
  const promises = []
  // posts
  promises.push(content.getPosts().then(result => {
    let slugs = []
    result.items.map(post => slugs.push('/posts/' + post.fields.slug))
    return slugs
  }))

  return Promise.all(promises).then(function(result) {
    // we merge slugs arrays returned by each promise on a single big flat array
    return [].concat.apply([], result);
  })
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/bulma.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/main.css' }
    ]
  },
  css: [
    //  Load a node.js module
    //  'bulma/css/bulma.css',
    //  '~assets/css/main.css',
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  generate: {
    routes: generateRoutes
  },

  plugins: [
    {src: '~plugins/vue-markdown.js'}
  ]

}
