import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddComment from "../comments/AddComment";
import Navbar from "../Navbar";

const CommentsView = styled.div`
  background-color: #adadad;
`;

class PostShow extends Component {
  state = {
    showComments: false,
    post: {},
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

  render() {
    return (
      // Page Container Lvl
      <div className="PostPageContainer">
        <h1>Post Show</h1>
        <h2>Post Feed</h2>

        

            {/* {/* ↓ All Posts Style Lvl ↓ */}
            {/* <Link to={`/post/${this.post.id}`}> */}
            {/* </Link> */}
            {/* <div className="PostContainer"> */}
            {/* ↓ User Profile Style Lvl ↓ */}
            {/* ↑ User Profile Info Style ↑ */}
            {/* ↑ User Profile Style Lvl ↑ */}
            {/* ↓ Post Content(s) Style Lvl ↓ */}


            {this.state.post.image_url ? (
              <img src={this.state.post.image_url} className="PostContentImg" />
            ) : null}

          {/* The post.image_url is the object being observed in the terinary. The div after the question mark is the comman being compared.  */}
            {this.state.post.image_url ? (
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


            {/* trying to make audio work with different methods */}
            {this.state.post.audio_url ? (
              <audio controls src={this.state.post.audio_url} typ e="audio/mpeg" />
            ) : null}
            {/* ↑ Post Content(s) Style Lvl ↑ */}
            {/* ↓ Post Info Style Lvl ↓ */}
            <div className="PostInfo">
              <h6>{this.state.post.content}</h6>
              <h6>{this.state.post.created_at}</h6>
            </div>
            {/* ↑ Post Info Style Lvl ↑ */}
            {/* ↓ Comment Functionality Lvl ↓ */}
            {/* ↓ Post Comment Button Style Lvl ↓ */}
            <button onClick={this.handleClick} className="commentButton">
              {this.state.showComments ? "Hide Comments" : "View comments:"}
            </button>
            {/* ↑ Post Comment Button Style Lvl ↑ */}
            {this.state.showComments ? (
              <CommentsView>
                {this.state.post.comments.map(comment => (
                  <div>
                    <h4>{comment.created_at}</h4>
                    <p>{comment.content}</p>
                  </div>
                ))}

                <h4>Add new comment:</h4>
                <AddComment {...this.props} />
              </CommentsView>
            ) : null}
            {/* ↑ Comment Functionality Lvl ↑ */}
            <Navbar />
          </div>
        

      
    );
  }
}

export default PostShow;
