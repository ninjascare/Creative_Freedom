import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`

`

const Page = styled.div`
overflow-x: hidden; 
overflow-y: scroll; 
width: 102vw;
background-color: rgb(181, 180, 180);
color: white;
a:link{
    text-decoration: none;
  }
  h3{
    text-decoration: underline;
    padding: 0px;
    margin: 0px;
}
a:visited{
  color: white;
}
img{
    height: 100vh; 
    // height: calc(100vh * (1/3)); 
    width: 150vh; 
        
   }

   
`

const Header = styled.div`
font-size: 3vw;
color: black;
background-color: white;
border-bottom: 1px solid black;
display: flex;
justify-content: space-around;

`

const Content = styled.div`
font-size: 3vw;
width: 100vw;
height: 100vh;

`
const Title = styled.div`
position: absolute;
z-index: 2;
color: white;
align-items: left;
margin-left: -20%;
margin-top: calc(50vh * (3/4));
text-shadow: 1px 1px 1px black;

`
const ImgStyle = styled.div`
display: flex;
justify-content: space-around;
#wheel{
  font-size: 4vw;
    color: white;
    position: absolute;
    z-index: 2;
    margin-left: -30%;
}
h3{
  text-decoration: none;
} 

img{
    position: absolute;
    z-index: 1;   
}

`
const InfoStyle = styled.div`
// text-shadow: 1px 1px 1px black;

`
const Headline = styled.div`
background-color: rgb(31 24 22);
padding: 8px 15px 15px 15px;

`
const Industry = styled.div`
background-color: rgb(31 24 22);
padding: 8px 15px 15px 15px;

`
const Experience = styled.div`
background-color: rgb(24 142 156);
padding: 8px 15px 15px 15px;
`
const Skill = styled.div`
background-color: rgb(235 194 138);
padding: 8px 15px 15px 15px;
line-height: 25px;
`
const Portfolio = styled.div`
img{
height: 50vw; 
width: 100vw;
align-items: center;
   }
`


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

                <Link to={`/profile/${this.props.match.params.userId}/settings`}>
                  <h3 id="wheel"><i class="fas fa-cog"></i></h3>
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
                Skill: {this.state.users.skill1} <br />
                Level: {this.state.users.skill1_level} <i class="fas fa-star"></i> <br />
                Skill: {this.state.users.skill2} <br />
                Level: {this.state.users.skill2_level} <i class="fas fa-star"></i> <br />
                Skill: {this.state.users.skill3} <br />
                Level: {this.state.users.skill3_level} <i class="fas fa-star"></i> <br />
                Skill: {this.state.users.skill4} <br />
                Level: {this.state.users.skill4_level} <i class="fas fa-star"></i> <br />
              </Skill>
              <Portfolio>
                <a href={this.state.users.portfolio_url}>
                  {/* <h3>Portfolio </h3> */}
                  <img
                    src={this.state.users.portfolio_image}
                    alt="Portfolio"
                  />

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
