import React, { Component } from "react";
import axios from "axios";

class PostIndex extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getAllPosts();
  }

  getAllPosts = () => {
    axios.get("/api/post").then(res => {
      this.setState({
        posts: res.data
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <div key={post._id}>
            {post.user.name} <br />
            {post.content} <br />
            {post.created_at} <br />
            <img src={post.image_url} />
            <iframe src={post.video_url} frameborder="100" />
          </div>
        ))}
        <h1>Post Index</h1>
        <h2>News Feed</h2>
      </div>
    );
  }
}

export default PostIndex;
