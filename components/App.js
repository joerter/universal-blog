import React from 'react'
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
    request.setRequestHeader('Content-type', 'application/json');

    request.onload = () => {
      if (request.status === 200) {
        this.setState({
          posts: JSON.parse(request.response)
        });
      }
    }

    request.send();
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

    return (
      <div>
        <h3>Posts</h3>
        <ul>
          {posts}
        </ul>

        {this.props.children}
      </div>
    )
  }
}

export default App
