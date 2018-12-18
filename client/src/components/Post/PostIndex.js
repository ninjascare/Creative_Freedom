import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddComment from "../comments/AddComment";
import Navbar from "../Navbar";

const CommentsView = styled.div`
  background-color: #adadad;
`;

class PostIndex extends Component {
  state = {
    user: {},
    showComments: false,
    posts: []
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`/api/user/${userId}`).then(res => {
      this.setState({
        user: res.data
      });
    });
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
      // Page Container Lvl
      <div className="PostPageContainer">
        <h1>Post Index</h1>
        <h2>News Feed</h2>

        {this.state.posts.map(post => (
          <div key={post.id}>
            {/* {/* ↓ All Posts Style Lvl ↓ */}
            <Link to={`/post/${post.id}`}>
    
            {/* <div className="PostContainer"> */}
            {/* ↓ User Profile Style Lvl ↓ */}
            {/* ↑ User Profile Info Style ↑ */}
            {/* ↑ User Profile Style Lvl ↑ */}
            {/* ↓ Post Content(s) Style Lvl ↓ */}
            <img src={post.image_url} className="PostContentImg" />
            <div className="PostContentVideo">
              <iframe
                width="500px"
                height="500px"
                src={post.video_url}
                frameborder="50"
                allowFullScreen
              />
            </div>
            {/* trying to make audio work with different methods */}
            {post.audio_url ? (
              <audio controls src={post.audio_url} typ e="audio/mpeg" />
            ) : null}
            {/* ↑ Post Content(s) Style Lvl ↑ */}
            </Link>
           
          </div>
        ))}
        <Navbar />

      </div>
    );
  }
}

export default PostIndex;
