const contentful = require('contentful')
const SPACE_ID = '7nl88wndrixl'
const ACCESS_TOKEN = '8c28a0513a9ca1558189b5644b65e108c9983aaee2e66a18cf335fbe512ecfc5'
const contentTypePost = 'post'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

const content = {

  getPosts () {
    return client.getEntries({
      'content_type': contentTypePost
    })
  },

  getPost (id) {
    return client.getEntry(id)
  }

}

export default content
