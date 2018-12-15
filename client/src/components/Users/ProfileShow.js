import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Page = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  width: 102vw;
  background-color: rgb(181, 180, 180);
  justify-content: space-around;

  a:link {
    text-decoration: none;
  }
  h2 {
    text-decoration: underline;
    padding: 0px;
    margin: 0px;
  }
  
`;
const Container = styled.div`
display: flex;
flex-direction: column;
`;

const Header = styled.div`
  font-size: 2vw;
  background-color: white;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-around;
`;

const Content = styled.div`
  // font-size: 2vw;
  width: 100vw;
  height: 100vh;
  border: solid red;

`;
const Title = styled.div`
  position: absolute;
  z-index: 2;
  color: white;
  text-shadow: 2px 2px 2px black;
  margin-top: 50%;

`;
const ImgStyle = styled.div`
  display: flex;
  justify-content: space-around;

  #wheel {
    font-size: 4vw;
    position: absolute;
    z-index: 2;
    margin-left: -30%;
  }
  a:visited{
    color: white;
  }
  #upload {
    position: absolute;
    z-index: 2;
    margin-left: -10%;
    text-shadow: 1px 1px 1px black;
  }
  img {
    position: absolute;
    // z-index: 1;
    border: solid blue;

  }
`;
const InfoStyle = styled.div`

`;

const Headline = styled.div`
  background-color: rgb(31 24 22);
  color: white;
`;
const Industry = styled.div`
  background-color: rgb(31 24 22);
  color: white;
`;
const Experience = styled.div`
  background-color: rgb(24 142 156);
`;
const Skill = styled.div`
  background-color: rgb(235 194 138);
`;
const Portfolio = styled.div`
align-items: center;

img{
  margin: auto;
  max-width: 150vw;
  max-height: 150vh;
}

  a:hover {
    color: white;
  }
`;

class ProfileShow extends Component {
  state = {
    users: {}
  };
  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`/api/user/${userId}`).then(res => {
      this.setState({
        users: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Page>
          <Container>
            <Header>
              <h1>My Profile</h1>
            </Header>
            <Content>
              <Title>
                <h1>{this.state.users.name} </h1>
                <h3>{this.state.users.title} </h3>
              </Title>
              <ImgStyle>
                {/* <Link to={"/profile/${this.state.users.id}/upload"}>
                <button id="upload">➕</button>
              </Link> */}

                <Link to={`/profile/${this.props.match.params.userId}/settings`}>
                  <h3 id="wheel"><i class="fas fa-cog"></i></h3>
                </Link>
                <img src={this.state.users.image_url} alt="profile pic" />
              </ImgStyle>
            </Content>
            <InfoStyle>
              <Headline>
                <h2> Headline </h2>
                {this.state.users.headline}
              </Headline>
              <Industry>
                <h2>Industry </h2>
                {this.state.users.industry} <br />
              </Industry>
              <Experience>
                <h2>Experience </h2>
                {this.state.users.experience} <br />
              </Experience>
              <Skill>
                <h2> Skills</h2>
                {this.state.users.skill1} {this.state.users.skill1_level} <br />
                {this.state.users.skill2} {this.state.users.skill2_level} <br />
                {this.state.users.skill3} {this.state.users.skill3_level} <br />
                {this.state.users.skill4} {this.state.users.skill4_level} <br />
                <br />
              </Skill>
              <Portfolio>
                <a href={this.state.users.portfolio_url}>
                  {/* <h2>Portfolio </h2> */}
                  <img
                    src={this.state.users.portfolio_image}
                    alt="Portfolio"
                  />{" "}
                  <br />{" "}
                </a>
              </Portfolio>
            </InfoStyle>
          </Container>
        </Page>
      </div>
    );
  }
}

export default ProfileShow;
