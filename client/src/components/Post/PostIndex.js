import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddComment from "../comments/AddComment";

const CommentsView = styled.div`
  border: solid black;
  background-color: silver;
`;

class PostIndex extends Component {
  state = {
    showComments: false,
    posts: []
  };

  componentDidMount() {
    this.getAllPosts();
  }

  handleClick = () => {
    this.setState({
      showComments: !this.state.showComments
    });
  };

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
        <h1>Post Index</h1>
        <h2>News Feed</h2>

        {this.state.posts.map(post => (
          <div key={post._id}>
            <Link to={`/member/${post.user.id}`}>
              {post.user.name} <br />
            </Link>{" "}
            <br />
            {post.content} <br />
            {post.created_at} <br />
            {/* trying to make audio work with different methods */}
            {post.audio_url ? (
              <audio controls src={post.audio_url} typ e="audio/mpeg" />
            ) : null}
            <br />
            <img src={post.image_url} />
            <iframe src={post.video_url} frameborder="100" /> <br />
            <button onClick={this.handleClick}>
              {this.state.showComments ? "Hide Comments" : "View comments:"}
            </button>
            {this.state.showComments ? (
              <CommentsView>
                {post.comments.map(comment => (
                  <div>
                    <h4>{comment.created_at}</h4>
                    <p>{comment.content}</p>
                  </div>
                ))}
                <h4>Add new comment:</h4>
                <AddComment {...this.props} />
              </CommentsView>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

export default PostIndex;
