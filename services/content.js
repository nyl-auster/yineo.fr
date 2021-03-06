const contentful = require('contentful')
const SPACE_ID = '7nl88wndrixl'
const ACCESS_TOKEN = '8c28a0513a9ca1558189b5644b65e108c9983aaee2e66a18cf335fbe512ecfc5'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

// pour transformer le markdown en html
// @TODO le faire à l'affichage avec un mixin ?
const marked = require('marked')
const axios = require('axios')

module.exports = {

  getPosts () {
    return client.getEntries({'content_type': 'post'})
  },

  /**
   * @param asset : full json representing file entity
   * example : send "result.fields.image" from a post object
   */
  getImage (asset) {
    const url = 'https:' + asset.fields.file.url
    return axios.get(url)
  },

  getPostBySlug (slug) {
    return client.getEntries({
      'content_type': 'post',
      'fields.slug': slug
    }).then(result => {
      return result.items[0]
    })
  },

  getPost (id) {
    return client.getEntry(id).then(post => {
      post.fields.content = marked(post.fields.content)
      return post
    })
  }

}
