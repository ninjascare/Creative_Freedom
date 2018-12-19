import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Navbar from "../Navbar";

const Container = styled.div`
  color: white;
  // width: 95%;
`;

const Page = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100vw;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #d3d3d3 74%);
  // background-color: #d7d7d7;
  // background-image: linear-gradient(147deg, #d7d7d7 0%, #353535 74%);
  a:link {
    text-decoration: none;
  }
  h3 {
    text-decoration: underline;
    padding: 0px;
    margin: 0px;
  }
  a:visited {
    color: white;
  }
`;

const Header = styled.div`
  font-size: 3vw;
  color: black;
  background-color: white;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: space-around;
`;

const Content = styled.div`
  font-size: 1.5vw;
  width: 100vw;
  height: 100vh;
  @media only screen and (min-device-width: 320px) and (max-width: 480px) {
     {
      font-size: 4vw;
    }
  }
`;

const Title = styled.div`
  position: absolute;
  z-index: 20;
  color: white;
  text-shadow: 1px 1px 1px black;
  margin-top: 65%;
  margin-left: -35%;

  @media only screen and (min-device-width: 320px) and (max-width: 480px) {
    margin-top: 75%;
    margin-left: -15%;
  }
`;
const ImgStyle = styled.div`
  display: flex;
  justify-content: space-around;
  #wheel {
    font-size: 5vw;
    color: white;
    position: absolute;
    z-index: 20;
    margin-left: -30%;
  }
  h3 {
    text-decoration: none;
  }
  img {
    position: absolute;
    z-index: 10;
    width: 100vw;
    height: 100vw;
    object-fit: cover;
    @media only screen and (min-device-width: 320px) and (max-width: 480px) {
       {
        border: none;
        border-radius: 0px;
        margin-left: -4%;
        width: 413px;
        height: 485px;
        object-fit: cover;
      }
    }
  }
`;
const InfoStyle = styled.div`
  font-weight: 500;
  line-height: 25px;
  margin-top: 43%;
  position: relative;
  z-index: 80;
  h3 {
    font-size: 23px;
  }
  @media only screen and (min-device-width: 320px) and (max-width: 480px) {
     {
      margin-top: -62.5%;
    }
  }
`;
const Headline = styled.div`
  background-color: rgb(31 24 22);
  padding: 8px 15px 15px 15px;
`;
const Industry = styled.div`
  background-color: rgb(31 24 22);
  padding: 8px 15px 15px 15px;
`;
const Experience = styled.div`
  background-color: rgb(24 142 156);
  padding: 8px 15px 15px 15px;
`;
const Skill = styled.div`
  background-color: rgb(235 194 138);
  padding: 8px 15px 15px 15px;
`;
const Portfolio = styled.div`
  img {
    height: 50vw;
    width: 100vw;
    align-items: center;
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
          <Header>
            <h1>My Profile</h1>
            <Link to={`/profile/${this.props.match.params.userId}/upload`}>
            <button>Upload</button>
            </Link>
          </Header>
          <Container>
            <Content>
              <ImgStyle>
                <Title>
                  <h1>{this.state.users.name} </h1>
                  <h3>{this.state.users.title} </h3>
                </Title>
                {/* <Link to={"/profile/${this.state.users.id}/upload"}>
                <button id="upload">➕</button>
              </Link> */}

                <Link
                  to={`/profile/${this.props.match.params.userId}/settings`}
                >
                  <h3 id="wheel">
                    <i class="fas fa-cog" />
                  </h3>
                </Link>
                <img src={this.state.users.image_url} alt="profile pic" />
              </ImgStyle>
            </Content>
            <InfoStyle>
              <Headline>
                <h3>Headline </h3>
                {this.state.users.headline}
              </Headline>
              <Industry>
                <h3>Industry </h3>
                {this.state.users.industry}
              </Industry>
              <Experience>
                <h3>Experience </h3>
                {this.state.users.experience}
              </Experience>
              <Skill>
                <h3> Skills</h3>
                {this.state.users.skill1}: {this.state.users.skill1_level}{" "}
                <i class="fas fa-star" /> <br />
                {this.state.users.skill2}: {this.state.users.skill2_level}{" "}
                <i class="fas fa-star" /> <br />
                {this.state.users.skill3}: {this.state.users.skill3_level}{" "}
                <i class="fas fa-star" /> <br />
                {this.state.users.skill4}: {this.state.users.skill4_level}{" "}
                <i class="fas fa-star" /> <br />
              </Skill>
              <Portfolio>
                <a href={this.state.users.portfolio_url}>
                  {/* <h3>Portfolio </h3> */}
                  <img src={this.state.users.portfolio_image} alt="Portfolio" />
                </a>
              </Portfolio>
            </InfoStyle>
          </Container>
        </Page>

        <Navbar />

      </div>
    );
  }
}

export default ProfileShow;
