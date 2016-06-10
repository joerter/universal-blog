import React from 'react'
import Post from './Post'
import { Link } from 'react-router'

const allPostsUrl = '/api/post'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const request = new XMLHttpRequest()
    request.open('GET', allPostsUrl, true)
    request.setRequestHeader('Content-type', 'application/json')

    request.onload = () => {
      if (request.status === 200) {
        this.setState({
          posts: JSON.parse(request.response)
        });
      }
    }

    request.send()
  }

  render() {
    const posts = this.state.posts.map((post) => {
      const linkTo = `/${post.id}/${post.slug}`;

      return (
        <li key={post.id}>
          <Link to={linkTo}>{post.title}</Link>
        </li>
      )
    })

    const { postId, postName } = this.props.params;
    let postTitle, postContent
    if (postId && postName) {
      const post = this.state.posts.find(p => p.id == postId)
      postTitle = post.title
      postContent = post.content
    }

    return (
      <div>
        <h3>Posts</h3>
        <ul>
          {posts}
        </ul>

        {postTitle && postContent ? (
          <Post title={postTitle} content={postContent} />
        ) : (
          <h1>Welcome to the Universal Blog!</h1>
        )}
      </div>
    )
  }
}

export default App
