import React, { Component } from "react";
import axios from "axios";
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
  height: 30px;
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
input{
  height: 80px;
}
`
const Industry = styled.div`
background-color: rgb(232 232 232);
padding: 8px 15px 15px 15px;
`
const Experience = styled.div`
background-color: rgb(232 232 232);
padding: 8px 15px 15px 15px;
input{
  height: 80px;
}
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
        <Header>
          <h1>Create Your Profile</h1>
        </Header>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <div>
              <Name>
                <label htmlFor="name">Name</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.name}
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
                  value={this.state.newUser.title}
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
                  value={this.state.newUser.image_url}
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
                  value={this.state.newUser.headline}
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
                  value={this.state.newUser.industry}
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
                  value={this.state.newUser.experience}
                  type="text"
                  name="experience"
                />
              </Experience>
            </div>
            <Skill>
              <div>
                <h2>  Rate Your Skills 1-5 </h2> <br />
                <label htmlFor="skill1">Skill 1</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.skill1}
                  type="text"
                  name="skill1"
                />
              </div>
              <div>
                <label htmlFor="skill1_level">Skill 1-Level</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.skill1_level}
                  type="text"
                  name="skill1_level"
                />
              </div>
              <div>
                <label htmlFor="skill2">Skill 2</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.skill2}
                  type="text"
                  name="skill2"
                />
              </div>
              <div>
                <label htmlFor="skill2_level">Skill 2-Level</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.skill2_level}
                  type="text"
                  name="skill2_level"
                />
              </div>
              <div>
                <label htmlFor="skill3">Skill 3</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.skill3}
                  type="text"
                  name="skill3"
                />
              </div>
              <div>
                <label htmlFor="skill3_level">Skill 3-Level</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.skill3_level}
                  type="text"
                  name="skill3_level"
                />
              </div>
              <div>
                <label htmlFor="skill4">Skill 4</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.skill4}
                  type="text"
                  name="skill4"
                />
              </div>
              <div>
                <label htmlFor="skill4_level">Skill 4-Level</label> <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.skill4_level}
                  type="text"
                  name="skill4_level"
                />
              </div>
            </Skill>
            <div>
              <PortfolioURL>
                <label htmlFor="portfolio_url">Portfolio URL</label> <br/>
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.portfolio_url}
                  type="text"
                  name="portfolio_url"
                />
              </PortfolioURL>
            </div>
            <div>
              <PortfolioImg>
                <label htmlFor="portfolio_image">Portfolio Image URL</label> <br/>
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.portfolio_image}
                  type="text"
                  name="portfolio_image"
                />
              </PortfolioImg>
            </div>
            <br/>
            <button type="submit">Enter the Ecosystem</button> <br/>
          </form>
        </Container>
      </div>
    );
  }
}

export default CreateProfile;