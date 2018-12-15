import React, { Component } from "react";
import axios from "axios";

class UploadContent extends Component {
  state = {
    newPost: {
      image_url: "",
      content: "",
      created_at: "",
      audio_url: "",
      video_url: "",
      created_at: ""
    }
  };

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
      .post("/api/post/", this.state.newPost, { withCredentials: true })
      .then(res => {
        console.log(res.data);
        this.props.history.push(`/profile/${res.data.id}`);
      });
  };

  render() {
    return (
      <div>
          <h1>Upload a new post:</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="image_url">Image_url</label>
            <input
              onChange={this.handleChange}
              value={this.state.newPost.image_url}
              type="text"
              name="image_url"
            />
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <input
              onChange={this.handleChange}
              value={this.state.newPost.content}
              type="text"
              name="content"
            />
          </div>
          <div>
            <label htmlFor="audio_url">Audio_url</label>
            <input
              onChange={this.handleChange}
              value={this.state.newPost.audio_url}
              type="text"
              name="audio_url"
            />
          </div>
          <div>
            <label htmlFor="video_url">Video_url</label>
            <input
              onChange={this.handleChange}
              value={this.state.newPost.video_url}
              type="text"
              name="video_url"
            />
          </div>
          <div>
            <label htmlFor="created_at">Created_at</label>
            <input
              onChange={this.handleChange}
              value={this.state.newPost.created_at}
              type="date"
              name="created_at"
            />
          </div>

          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default UploadContent;
