import React, { Component } from "react";
import axios from "axios";

class CreateProfile extends Component {
    
  state = {
    newUser: {
      name: "",
      title: "",
      image_url: "",
      headline: "",
      industry: "",
      experience: "",
      skill1: "",
      skill1_level: "",
      skill2: "",
      skill2_level: "",
      skill3: "",
      skill3_level: "",
      skill4: "",
      skill4_level: "",
      portfolio_url: "",
      portfolio_image: ""
    }
  };

  handleChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const updatedNewUser = { ...this.state.newUser };
    updatedNewUser[e.target.name] = e.target.value;
    this.setState({ newUser: updatedNewUser });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/api/user/", this.state.newUser, { withCredentials: true })
      .then(res => {
        console.log(res.data);
        this.props.history.push(`/profile/${res.data.id}`);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.name}
              type="text"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.title}
              type="text"
              name="title"
            />
          </div>
          <div>
            <label htmlFor="image_url">Image_url</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.image_url}
              type="text"
              name="image_url"
            />
          </div>
          <div>
            <label htmlFor="headline">Headline</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.headline}
              type="text"
              name="headline"
            />
          </div>
          <div>
            <label htmlFor="industry">Industry</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.industry}
              type="text"
              name="industry"
            />
          </div>
          <div>
            <label htmlFor="experience">Experience</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.experience}
              type="text"
              name="experience"
            />
          </div>
          <div>
            <label htmlFor="skill1">Skill1</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.skill1}
              type="text"
              name="skill1"
            />
          </div>
          <div>
            <label htmlFor="skill1_level">Skill1_level</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.skill1_level}
              type="text"
              name="skill1_level"
            />
          </div>
          <div>
            <label htmlFor="skill2">Skill2</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.skill2}
              type="text"
              name="skill2"
            />
          </div>
          <div>
            <label htmlFor="skill2_level">Skill2_level</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.skill2_level}
              type="text"
              name="skill2_level"
            />
          </div>
          <div>
            <label htmlFor="skill3">Skill3</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.skill3}
              type="text"
              name="skill3"
            />
          </div>
          <div>
            <label htmlFor="skill3_level">Skill3_level</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.skill3_level}
              type="text"
              name="skill3_level"
            />
          </div>
          <div>
            <label htmlFor="skill4">Skill4</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.skill4}
              type="text"
              name="skill4"
            />
          </div>
          <div>
            <label htmlFor="skill4_level">Skill4_level</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.skill4_level}
              type="text"
              name="skill4_level"
            />
          </div>
          <div>
            <label htmlFor="portfolio_url">Portfolio_url</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.portfolio_url}
              type="text"
              name="portfolio_url"
            />
          </div>
          <div>
            <label htmlFor="portfolio_image">Portfolio_image</label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.portfolio_image}
              type="text"
              name="portfolio_image"
            />
          </div>
          <button type="submit">Create Profile</button>
        </form>
      </div>
    );
  }
}

export default CreateProfile;