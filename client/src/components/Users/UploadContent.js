import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CreateProfile from "../Onboarding/CreateProfile";

const Header = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 15px 15px 15px;
  form {
    border: inset rgb(220 220 220);
    border-radius: 5px;
  }
  label {
    font-weight: bold;
  }
  input {
    font-size: 20px;
    border-radius: 10px;
    height: 80px;
    width: 80vw;
  }
  button {
    color: white;
    font-size: 18px;
    font-weight: bold;
    height: 65px;
    width: 200px;
    border-radius: 15px;
    box-shadow: 1px 2px 5px black;
    display: block;
    margin: auto;
    background-image: linear-gradient(
      to top right,
      rgb(236 0 255),
      rgb(166 4 255),
      rgb(32 118 255),
      rgb(0 175 251)
    );
  }
`;

const Image = styled.div`
  background-color: rgb(250 250 250);
  padding: 8px 15px 15px 15px;
`;
const Content = styled.div`
  background-color: rgb(245 245 245);
  padding: 8px 15px 15px 15px;
`;
const Audio = styled.div`
  background-color: rgb(232 232 232);
  padding: 8px 15px 15px 15px;
`;

const Video = styled.div`
  background-color: rgb(214 214 214);
  padding: 8px 15px 15px 15px;
  line-height: 25px;
`;
const CreatedOn = styled.div`
  background-color: rgb(190 190 190);
  padding: 8px 15px 15px 15px;
`;

class UploadContent extends Component {
  state = {
    user: {},
    newPost: {
      image_url: "",
      content: "",
      audio_url: "",
      video_url: "",
      created_at: "",
      user: {}

    }
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`/api/user/${userId}/`).then(res => {
      console.log(res.data);
      this.setState({ user: res.data });
    });
  }

  handleChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const CreatedPost = { ...this.state.newPost };
    CreatedPost[e.target.name] = e.target.value;
    this.setState({ newPost: CreatedPost });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/api/post/", this.state.newPost)
      .then(res => {
        console.log(res.data);
        this.props.history.push(`/profile/${this.state.user.id}`);
      });
  };

  render() {
    return (
      <div>
        <Header>
          <h1>Post your work!</h1>
        </Header>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <div>
              <Image>
                <label htmlFor="image_url">Image</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newPost.image_url}
                  type="text"
                  name="image_url"
                />
              </Image>
            </div>
            <div>
              <Content>
                <label htmlFor="content">Content</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newPost.content}
                  type="text"
                  name="content"
                />
              </Content>
            </div>
            <div>
              <Audio>
                <label htmlFor="audio_url">Audio</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newPost.audio_url}
                  type="text"
                  name="audio_url"
                />
              </Audio>
            </div>
            <div>
              <Video>
                <label htmlFor="video_url">Video</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newPost.video_url}
                  type="text"
                  name="video_url"
                />
              </Video>
            </div>
            <div>
              <CreatedOn>
                <label htmlFor="created_at">Created On</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newPost.created_at}
                  type="date"
                  name="created_at"
                />
              </CreatedOn>
            </div>
            <div>
              <CreatedOn>
                <label htmlFor="user">User</label> <br />
                <input
                  value={this.state.user.name}
                  name="user"
                />
              </CreatedOn>
            </div>
            <button type="submit">Post</button>
            <br />
          </form>
        </Container>
      </div>
    );
  }
}

export default UploadContent;
