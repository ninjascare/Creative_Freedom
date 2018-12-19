import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    height: 30px;
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

const DeleteButton = styled.div`
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
    background-color: red;
  }
`;

const Name = styled.div`
  background-color: rgb(250 250 250);
  padding: 8px 15px 15px 15px;
`;
const Title = styled.div`
  background-color: rgb(250 250 250);
  padding: 8px 15px 15px 15px;
`;
const ImgStyle = styled.div`
  background-color: rgb(245 245 245);
  padding: 8px 15px 15px 15px;
`;
const Headline = styled.div`
  background-color: rgb(245 245 245);
  padding: 8px 15px 15px 15px;
  input {
    height: 80px;
  }
`;
const Industry = styled.div`
  background-color: rgb(232 232 232);
  padding: 8px 15px 15px 15px;
`;
const Experience = styled.div`
  background-color: rgb(232 232 232);
  padding: 8px 15px 15px 15px;
  input {
    height: 80px;
  }
`;
const Skill = styled.div`
  background-color: rgb(214 214 214);
  padding: 8px 15px 15px 15px;
  line-height: 25px;
`;
const PortfolioURL = styled.div`
  background-color: rgb(190 190 190);
  padding: 8px 15px 15px 15px;
`;
const PortfolioImg = styled.div`
  background-color: rgb(190 190 190);
  padding: 8px 15px 15px 15px;
`;
export default class EditPost extends Component {
  state = {
    user: {},
    post: {}
  };

  componentDidMount() {
    const postId = this.props.match.params.postId;
    axios.get(`/api/post/${postId}`).then(res => {
      this.setState({ post: res.data });
    });
  }

  handleChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const UpdatedPost = { ...this.state.post };
    UpdatedPost[e.target.name] = e.target.value;
    console.log(UpdatedPost);
    this.setState({ post: UpdatedPost });
  };

  handleUpdate = postId => {
    const updatedPost = this.state.post;
    axios.put(`/api/post/${postId}/`, updatedPost).then(() => {
      console.log("Updated Post");
    });
  };

  render() {
    return (
      <div>
        <Header>
          <h1>Post Settings</h1>
        </Header>
        <Container>
          <form onSubmit={this.handleUpdate(this.state.post.id)}>
            <div>
              <Name>
                <label htmlFor="image_url">Image_url</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.post.image_url}
                  type="text"
                  name="image_url"
                />
              </Name>
            </div>
            <div>
              <Title>
                <label htmlFor="content">Content</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.post.content}
                  type="text"
                  name="content"
                />
              </Title>
            </div>
            <div>
              <ImgStyle>
                <label htmlFor="audio_url">Audio URL</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.post.audio_url}
                  type="text"
                  name="audio_url"
                />
              </ImgStyle>
            </div>
            <div>
              <Headline>
                <label htmlFor="video_url">Video_url</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.post.video_url}
                  type="text"
                  name="video_url"
                />
              </Headline>
            </div>
            <div>
              <Industry>
                <label htmlFor="created_at">Created_at</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.post.created_at}
                  type="date"
                  name="created_at"
                />
              </Industry>
            </div>
            <br />
            <Link to={`/post/${this.state.post.id}`}>
              <button>Submit</button>
            </Link>
          </form>
        </Container>
      </div>
    );
  }
}
