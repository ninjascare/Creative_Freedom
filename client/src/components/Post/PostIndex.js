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
      // Page Container Lvl
      <div className='PostPageContainer'>
        <h1>Post Index</h1>
        <h2>News Feed</h2>

        {this.state.posts.map(post => (
          <div key={post._id}>
            {/* ↓ All Posts Style Lvl ↓ */}

            <div className='PostContainer'>


              {/* ↓ User Profile Style Lvl ↓ */}
              <Link to={`/member/${post.user.id}`} className='PostUserProfileInfo'>

                {/* User Profile Image Style */}
                <img src={post.user.image_url} alt="" className='PostProfileImg' />



                {/* ↓ User Profile Info Style ↓ */}
                <div className='PostUser'>
                  <h2>{post.user.name}</h2>
                  <h2>{post.user.title}</h2>
                </div>
              </Link>{" "}

              {/* ↑ User Profile Info Style ↑ */}

              {/* ↑ User Profile Style Lvl ↑ */}


              {/* ↓ Post Content(s) Style Lvl ↓ */}
              {post.image_url ? (
                <img src={post.image_url} className='PostContentImg' />
              ) : null}

              {post.video_url ? (
                <div className='PostContentVideo'>
                  <iframe width='500px' height='500px' src={post.video_url} frameborder="50" allowFullScreen />
                </div>
              ) : null

              }
              {/* trying to make audio work with different methods */}
              {post.audio_url ? (
                <audio controls src={post.audio_url} type="audio/mpeg" />
              ) : null}
              {/* ↑ Post Content(s) Style Lvl ↑ */}


              {/* ↓ Post Info Style Lvl ↓ */}
              <div className='PostInfo'>
                <h4>{post.user.name}</h4>
                <h6>{post.content}</h6>
                <h6>{post.created_at}</h6>
              </div>
              {/* ↑ Post Info Style Lvl ↑ */}


              {/* ↓ Comment Functionality Lvl ↓ */}
              {/* ↓ Post Comment Button Style Lvl ↓ */}
              <button onClick={this.handleClick} className='commentButton'>
                {this.state.showComments ? "Hide Comments" : "View comments:"}
              </button>
              {/* ↑ Post Comment Button Style Lvl ↑ */}
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
              {/* ↑ Comment Functionality Lvl ↑ */}
            </div>

          </div>
        ))}
        <Navbar />

      </div>
    );
  }
}

export default PostIndex;
