import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Post = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  border: 1px solid black;
  margin: 30px auto;
`

const Profile = styled.div`
  width: 66vw;
  display: flex;
  justify-content: space-around;
  align-items: right;
  border-bottom: 2px solid black;
  padding: 20px;
  text-decoration: none;
  img {
    height: 50px;
    width: 70px;
    border-radius: 100%;
  }
`

const ProfileInfo = styled.div`
  border: 1px solid black;
`

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
      // Page Container Lvl
      <div>

        <h1>Post Index</h1>
        <h2>News Feed</h2>

        {this.state.posts.map(post => (
          <div key={post._id}>
          {/* ↓ All Posts Style Lvl ↓ */}
          <Post>

            <Profile>
          {/* ↓ User Profile Style Lvl ↓ */}
            <Link to={"/member/:userId"}>
              {/* User Profile Image Style */}
              <img src={post.user.image_url} alt=""/>
              
              
              <ProfileInfo>
            {/* ↓ User Profile Info Style ↓ */}
              <h1>{post.user.name}</h1>
              <h5>{post.user.title}</h5> 
              </ProfileInfo>
              </Link>{" "}
            {/* ↑ User Profile Info Style ↑ */}

            </Profile>
            {/* ↑ User Profile Style Lvl ↑ */}


          {/* ↓ Post Content(s) Style Lvl ↓ */}

            {/* trying to make audio work with different methods */}
            {post.audio_url ? (
              <audio controls src={post.audio_url} type="audio/mpeg" />
            ) : null}

            
            <br />
            <img src={post.image_url} />
            <iframe src={post.video_url} frameborder="100" /> <br />
          
          {/* ↑ Post Content(s) Style Lvl ↑ */}


          {/* ↓ Post Info Style Lvl ↓ */}
          <br />
            {post.content} <br />
            {post.created_at} <br />
          {/* ↑ Post Info Style Lvl ↑ */}
            

          {/* ↓ Post Comment Button Style Lvl ↓ */}
            <button>
              View comments:
              {post.comments.map(comment => (
                <div>
                  <h4>{comment.created_at}</h4>
                  <p>{comment.content}</p>
                </div>
              ))}
            </button>
          {/* ↑ Post Comment Button Style Lvl ↑ */}

            </Post>

          </div>
        ))}

      </div>
    );
  }
}

export default PostIndex;
