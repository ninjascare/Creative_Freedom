import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
            <Link to={"/member/:userId"}>
              {post.user.name} <br />
            </Link>{" "}
            <br />
            {post.content} <br />
            {post.created_at} <br />
            {/* trying to make audio work with different methods */}
            {post.audio_url ? (
              <audio controls src={post.audio_url} type="audio/mpeg"/>
            ) : null}
            <br />
            <img src={post.image_url} />
            <iframe src={post.video_url} frameborder="100" /> <br />
            <button>
              View comments:
              {post.comments.map(comment => (
                <div>
                  <h4>{comment.created_at}</h4>
                  <p>{comment.content}</p>
                </div>
              ))}
            </button>
          </div>
        ))}
        <h1>Post Index</h1>
        <h2>News Feed</h2>
      </div>
    );
  }
}

export default PostIndex;
