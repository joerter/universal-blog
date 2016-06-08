import React from 'react'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: ''
    }
  }

  fetchPost(id) {
    const request = new XMLHttpRequest()
    request.open('GET', '/api/post/' + id, true)
    request.setRequestHeader('Content-type', 'application/json');

    request.onload = () => {
      if (request.status === 200) {
        const response = JSON.parse(request.response)
        this.setState({
          title: response.title,
          content: response.content
        });
      }
    }

    request.send();

  }

  componentDidMount() {
    this.fetchPost(this.props.params.postId)
  }

  componentWillReceiveProps(nextProps) {
    this.fetchPost(nextProps.params.postId)
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <p>{this.state.content}</p>
      </div>
    )
  }
}

export default Post
