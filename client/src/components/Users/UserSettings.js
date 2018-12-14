import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class UserSettings extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`/api/user/${userId}`).then(res => {
      this.setState({ user: res.data });
    });
  }

  handleChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const UpdateUser = { ...this.state.user };
    UpdateUser[e.target.name] = e.target.value;
    console.log(UpdateUser);
    this.setState({ user: UpdateUser });
  };

  handleUpdate = userId => {
    const updatedUser = this.state.user;
    axios.put(`/api/user/${userId}/`, updatedUser).then(() => {
      console.log("Updated User");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleUpdate(this.state.user.id)}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.name}
              type="text"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.title}
              type="text"
              name="title"
            />
          </div>
          <div>
            <label htmlFor="image_url">Image_url</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.image_url}
              type="text"
              name="image_url"
            />
          </div>
          <div>
            <label htmlFor="headline">Headline</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.headline}
              type="text"
              name="headline"
            />
          </div>
          <div>
            <label htmlFor="industry">Industry</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.industry}
              type="text"
              name="industry"
            />
          </div>
          <div>
            <label htmlFor="experience">Experience</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.experience}
              type="text"
              name="experience"
            />
          </div>
          <div>
            <label htmlFor="skill1">Skill1</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.skill1}
              type="text"
              name="skill1"
            />
          </div>
          <div>
            <label htmlFor="skill1_level">Skill1_level</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.skill1_level}
              type="text"
              name="skill1_level"
            />
          </div>
          <div>
            <label htmlFor="skill2">Skill2</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.skill2}
              type="text"
              name="skill2"
            />
          </div>
          <div>
            <label htmlFor="skill2_level">Skill2_level</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.skill2_level}
              type="text"
              name="skill2_level"
            />
          </div>
          <div>
            <label htmlFor="skill3">Skill3</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.skill3}
              type="text"
              name="skill3"
            />
          </div>
          <div>
            <label htmlFor="skill3_level">Skill3_level</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.skill3_level}
              type="text"
              name="skill3_level"
            />
          </div>
          <div>
            <label htmlFor="skill4">Skill4</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.skill4}
              type="text"
              name="skill4"
            />
          </div>
          <div>
            <label htmlFor="skill4_level">Skill4_level</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.skill4_level}
              type="text"
              name="skill4_level"
            />
          </div>
          <div>
            <label htmlFor="portfolio_url">Portfolio_url</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.portfolio_url}
              type="text"
              name="portfolio_url"
            />
          </div>
          <div>
            <label htmlFor="portfolio_image">Portfolio_image</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.portfolio_image}
              type="text"
              name="portfolio_image"
            />
          </div>
          <Link to={`/profile/${this.state.user.id}`}>
            <button type="submit">Update Profile</button>
          </Link>
        </form>
      </div>
    );
  }
}
