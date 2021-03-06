import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddComment from "../comments/AddComment";
import Navbar from "../Navbar";

// const CommentsView = styled.div`
//   background-color: #adadad;
// `;

class PostShow extends Component {
  state = {
    user: {},
    showComments: false,
    post: {}
  };

  componentDidMount() {
    const postId = this.props.match.params.postId;
    axios.get(`/api/post/${postId}`).then(res => {
      this.setState({
        post: res.data
      });
    });
  }

  handleClick = () => {
    this.setState({
      showComments: !this.state.showComments
    });
  };

  handleDelete = postId => {
    axios.delete(`/api/post/${postId}`).then(res => {
      this.setState({ post: res.data });
    });
    window.location.reload();
  };

  render() {
    return (
      // Page Container Lvl
      <div>
      <div className="PostShowPageContainer">
        <div className="PostShowContainer">
          {/* {/* ↓ All Posts Style Lvl ↓ */}

          {/* ↓ Post Content(s) Style Lvl ↓ */}

          {/* ↓ This ternary operator works like this: "If the object is an image, then pull up this data." ↓ */}
          {this.state.post.image_url ? (
            <img src={this.state.post.image_url} className="PostContentImg" />
          ) : null}

          {/* ↓ "If the object is Video, then pull up this data." ↓ */}
          {this.state.post.video_url ? (
            <div className="PostContentVideo">
              <iframe
                width="500px"
                height="500px"
                src={this.state.post.video_url}
                frameborder="50"
                allowFullScreen
              />
            </div>
          ) : null}

          {/* Same thing as the others, but with audio */}
          {this.state.post.audio_url ? (
            <div>
              <audio
                controls
                src={this.state.post.audio_url}
                typ
                e="audio/mpeg"
              />
            </div>
          ) : null}
          {/* ↑ Post Content(s) Style Lvl ↑ */}

          {/* ↓ Post Info Style Lvl ↓ */}
          <div className="PostInfo">
            {/* <h4>{this.state.post.use}</h4> */}
            <h6>{this.state.post.content}</h6>
            <h6>{this.state.post.created_at}</h6>
          </div>
          {/* ↑ Post Info Style Lvl ↑ */}

          {/* ↓ Comment Functionality Lvl ↓ */}
          {/* ↓ Post Comment Button Style Lvl ↓ */}
          <div className="commentButtonBox">
            <button onClick={this.handleClick} className="commentButtonStyle">
              {this.state.showComments ? "Hide Comments" : "View Comments:"}
            </button>
          </div>
          {/* ↑ Post Comment Button Style Lvl ↑ */}

          {this.state.showComments ? (
            <div>
              {this.state.post.comments.map(comment => (
                <div>
                  <h4>{comment.created_at}</h4>
                  <p>{comment.content}</p>
                </div>
              ))}

              <h4>Add new comment:</h4>
              <AddComment {...this.props} />
            </div>
          ) : null}
          {/* ↑ Comment Functionality Lvl ↑ */}

          <Link to={`/post/${this.state.post.id}/edit`}>
            <button className="deleteButtonStyle">Edit This Post</button>
          </Link>

          <Link to="/posts">
            <button
              onClick={() => this.handleDelete(this.state.post.id)}
              className="deleteButtonStyle"
            >
              Delete this post
            </button>
          </Link>
          <br />
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default PostShow;
