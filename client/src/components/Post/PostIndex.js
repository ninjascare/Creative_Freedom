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
      // ↓ This is the top of the page Menu x Dummy Search Bar ↓
      <div>
        <h1 className='PageTop'>
          <span>Connx</span> <div>Discover</div> <div>Events</div> (MemberList)
        </h1>

        <div className='PostIndexDummySearchBar'>
          <div>Search</div> 🔍
        </div>
      {/* ↑ This is the top of the page Menu x Dummy Search Bar ↑ */}

        <div className="PostGridContainer">

          {this.state.posts.map(post => (
            <Link to={`/post/${post.id}`} key={post.id} className='PostIndexPeskyATag'>

            {/* {/* ↓ All Posts Style Lvl ↓ */}  

              {/* ↓ Post Content(s) Style Lvl ↓ */}
              {post.image_url ? (
                <img src={post.image_url} className="PostIndexContentImg" />
              ) : null}


              {post.video_url ? (
                <div className="PostIndexContentVideo">
                  <iframe
                    width="300px"
                    height="300px"
                    src={post.video_url}
                    frameborder="0"
                    allowFullScreen />
                </div>
                ) : null}

              {/* ↑ Post Content(s) Style Lvl ↑ */}
            </Link>
          ))}

        </div>
        <Navbar />
      </div >
    );
  }
}

export default PostIndex;
