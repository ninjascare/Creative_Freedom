import React, { Component } from "react";
import axios from "axios";

export default class AddComment extends Component {
  state = {
    post: {},
    newComment: {
      content: "",
      created_at: "",
      post: ""
    }
  };

  componentDidMount() {
    this.setPostId();
    const postId = this.props.match.params.postId;
    axios.get(`/api/post/${postId}`).then(res => {
      this.setState({
        post: res.data
      });
    });
  }
  setPostId = () => {
    const postId = this.props.match.params.postId;
    const comment = {
      content: "",
      created_at: "",
      post: postId
    };
    this.setState({ newComment: comment });
  };

  handleChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const createdComment = { ...this.state.newComment };
    createdComment[e.target.name] = e.target.value;
    this.setState({ newComment: createdComment });
  };

  handleSubmit = event => {
    axios.post(`/api/comment/`, this.state.newComment).then(res => {
      console.log("Hey!!", res.data);
      this.props.history.push(`/post/${this.state.post.id}`);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="created_at">Created_at:</label>
            <input
              onChange={this.handleChange}
              value={this.state.newComment.created_at}
              type="date"
              name="created_at"
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <input
              onChange={this.handleChange}
              value={this.state.newComment.content}
              type="text"
              name="content"
            />
          </div>
          <button>Post</button>
        </form>
      </div>
    );
  }
}
