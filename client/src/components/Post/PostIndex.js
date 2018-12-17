import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components'



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

        <h1>Post Index</h1>
        <h2>News Feed</h2>

        {this.state.posts.map(post => (
          <div key={post._id}>

          <div className='postStyle'>

            <div className='Profile'>
            <Link to={"/member/:userId"}>
              <img src={post.user.image_url} alt="" className='postProfileImg' />
              
              <h1>{post.user.name}</h1>
              <h5>{post.user.title}</h5> 
            </Link>{" "}
            </div>

            <br />
            {post.content} <br />
            {post.created_at} <br />

            {/* trying to make audio work with different methods */}
            {post.audio_url ? (
              <audio controls src={post.audio_url} type="audio/mpeg" />
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

          </div>
        ))}

      </div>
    );
  }
}

export default PostIndex;
