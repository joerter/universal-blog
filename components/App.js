import React from 'react'

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
      return <li key={post.id}>{post.title}</li>
    })

    return (
      <div>
        <h3>Posts</h3>
        <ul>
          {posts}
        </ul>
      </div>
    )
  }
}

export default App
