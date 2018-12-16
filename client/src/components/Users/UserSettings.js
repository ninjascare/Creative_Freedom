import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
display: flex;
justify-content: center;
`
const Container = styled.div`
display: flex;
justify-content: center;
padding: 8px 15px 15px 15px;
form{
  border: inset rgb(220 220 220);
  border-radius: 5px;
  
}
label{
  font-weight: bold;
}
input{
  font-size: 20px;
  border-radius: 10px;
  height: 80px;
  width: 80vw;
}
button{
  color: white;
  font-size: 18px;
  font-weight: bold;
  height: 65px;
  width: 200px;
  border-radius: 15px;
  box-shadow: 1px 2px 5px black;
  display: block;
  margin: auto;  
  background-image: linear-gradient(to top right, rgb(236 0 255), rgb(166 4 255),rgb(32 118 255),rgb( 0 175 251));
}

`
const Name = styled.div`
background-color: rgb(250 250 250);
padding: 8px 15px 15px 15px;
`
const Title = styled.div`
background-color: rgb(250 250 250);
padding: 8px 15px 15px 15px;
`
const ImgStyle = styled.div`
background-color: rgb(245 245 245);
padding: 8px 15px 15px 15px;
`
const Headline = styled.div`
background-color: rgb(245 245 245);
padding: 8px 15px 15px 15px;
`
const Industry = styled.div`
background-color: rgb(232 232 232);
padding: 8px 15px 15px 15px;
`
const Experience = styled.div`
background-color: rgb(232 232 232);
padding: 8px 15px 15px 15px;
`
const Skill = styled.div`
background-color: rgb(214 214 214);
padding: 8px 15px 15px 15px;
line-height: 25px;
`
const PortfolioURL = styled.div`
background-color: rgb(190 190 190);
padding: 8px 15px 15px 15px;
`
const PortfolioImg = styled.div`
background-color: rgb(190 190 190);
padding: 8px 15px 15px 15px;
`
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
        <Header>
                <h1>User Settings</h1>
                </Header>
        <Container>
        <form onSubmit={this.handleUpdate(this.state.user.id)}>
          <div>
            <Name>
              <label htmlFor="name">Name</label> <br />
              <input
                onChange={this.handleChange}
                value={this.state.user.name}
                type="text"
                name="name"
              />
            </Name>
          </div>
          <div>
            <Title>
              <label htmlFor="title">Title</label> <br />
              <input
                onChange={this.handleChange}
                value={this.state.user.title}
                type="text"
                name="title"
              />
            </Title>
          </div>
          <div>
            <ImgStyle>
              <label htmlFor="image_url">Profile Image URL</label> <br />
              <input
                onChange={this.handleChange}
                value={this.state.user.image_url}
                type="text"
                name="image_url"
              />
            </ImgStyle>
          </div>
          <div>
            <Headline>
              <label htmlFor="headline">Headline</label> <br />
              <input
                onChange={this.handleChange}
                value={this.state.user.headline}
                type="text"
                name="headline"
              />
            </Headline>
          </div>
          <div>
            <Industry>
              <label htmlFor="industry">Industry</label> <br />
              <input
                onChange={this.handleChange}
                value={this.state.user.industry}
                type="text"
                name="industry"
              />
            </Industry>
          </div>
          <div>
          <Experience>
            <label htmlFor="experience">Experience</label> <br />
            <input
              onChange={this.handleChange}
              value={this.state.user.experience}
              type="text"
              name="experience"
            />
          </Experience>  
          </div>
          <Skill>
          <div>
            Rate Your Skills 1-5 <br />
            <label htmlFor="skill1">Skill 1</label> <br />
            <input
              onChange={this.handleChange}
              value={this.state.user.skill1}
              type="text"
              name="skill1"
            />            
          </div>
          <div>
            <label htmlFor="skill1_level">Skill 1-Level</label> <br />
            <input
              onChange={this.handleChange}
              value={this.state.user.skill1_level}
              type="text"
              name="skill1_level"
            />
          </div>
          <div>
            <label htmlFor="skill2">Skill 2</label> <br />
            <input
              onChange={this.handleChange}
              value={this.state.user.skill2}
              type="text"
              name="skill2"
            />
          </div>
          <div>
            <label htmlFor="skill2_level">Skill 2-Level</label> <br />
            <input
              onChange={this.handleChange}
              value={this.state.user.skill2_level}
              type="text"
              name="skill2_level"
            />
          </div>
          <div>
            <label htmlFor="skill3">Skill 3</label> <br />
            <input
              onChange={this.handleChange}
              value={this.state.user.skill3}
              type="text"
              name="skill3"
            />
          </div>
          <div>
            <label htmlFor="skill3_level">Skill 3-Level</label> <br />
            <input
              onChange={this.handleChange}
              value={this.state.user.skill3_level}
              type="text"
              name="skill3_level"
            />
          </div>
          <div>
            <label htmlFor="skill4">Skill 4</label> <br />
            <input
              onChange={this.handleChange}
              value={this.state.user.skill4}
              type="text"
              name="skill4"
            />
          </div>
          <div>
            <label htmlFor="skill4_level">Skill 4-Level</label> <br />
            <input
              onChange={this.handleChange}
              value={this.state.user.skill4_level}
              type="text"
              name="skill4_level"
            />
          </div>
          </Skill>
          <div>
          <PortfolioURL>
            <label htmlFor="portfolio_url">Portfolio URL</label> <br />
            <input
              onChange={this.handleChange}
              value={this.state.user.portfolio_url}
              type="text"
              name="portfolio_url"
            />
            </PortfolioURL>
          </div>
          <div>
          <PortfolioImg>
            <label htmlFor="portfolio_image">Portfolio Image URL</label> <br />
            <input
              onChange={this.handleChange}
              value={this.state.user.portfolio_image}
              type="text"
              name="portfolio_image"
            />
          </PortfolioImg>
          </div>
          <br/>
          <div>
          <Link to={`/posts/${this.state.user.id}`}>
            <button type="submit">Update Profile</button><br/>
          </Link>
          </div>
          <br/>
        </form>
        </Container>
      </div>
    );
  }
}
