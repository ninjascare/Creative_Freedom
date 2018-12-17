import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import axios from "axios";

const Page = styled.div`
overflow-x: hidden; 
overflow-y: scroll; 
width: 102vw;
background-color: rgb(181, 180, 180);
a:link{
    text-decoration: none;
  }
  h3{
    text-decoration: underline;
    padding: 0px;
    margin: 0px;
}
img{
    height: 100vh; 
    // height: calc(100vh * (9/16)); 

    width: 150vh;     
   }

`

const Header = styled.div`
font-size: 3vw;
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
text-shadow: 1px 1px 1px black;
margin-top: calc(50vh * (3/4));
margin-left: -20%;

`
const ImgStyle = styled.div`
display: flex;
justify-content: space-around;
h3{
    text-decoration: none;
  } 
img{
    position: absolute;
    z-index: 1;   
}

`
const InfoStyle = styled.div`
// text-shadow: 1px 1px 1px white;
font-weight: 500;
line-height: 25px;
h3{
  font-size: 23px;
}
`
const Headline = styled.div`
background-color: rgb(253 199 0);
color: black;
padding: 8px 15px 15px 15px;

`
const Industry = styled.div`
background-color: rgb(31 24 22);
color: black;
padding: 8px 15px 15px 15px;

`
const Experience = styled.div`
background-color: rgb(137 193 195);
padding: 8px 15px 15px 15px;

`
const Skill = styled.div`
background-color: rgb(230 230 230);
padding: 8px 15px 15px 15px;
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
        const userId = this.props.match.params.userId
        axios.get(`/api/user/${userId}`).then(res => {
            this.setState({
                users: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <Page>
                    <Header>
                        <h1>{this.state.users.name} Profile</h1>
                    </Header>
                    <Content>

                        <ImgStyle>
                            <Title>
                                <h1>{this.state.users.name} </h1>
                                <h3>{this.state.users.title} </h3>
                            </Title>
                            {`/settings/userId/${this.props.match.params.userId}`}>
                            <img src={this.state.users.image_url} alt="profile pic" />
                        </ImgStyle>
                    </Content>
                    <InfoStyle>
                        <Headline>
                            <h3> Headline </h3>{this.state.users.headline}
                        </Headline>
                        {/* <Industry>
                            <h3>Industry </h3>
                            {this.state.users.industry} <br />

                        </Industry> */}
                        <Experience>
                            <h3>Experience </h3>
                            {this.state.users.experience} <br />

                        </Experience>
                        <Skill>
                        <h3> Skills</h3>
                {this.state.users.skill1}: {this.state.users.skill1_level} <i class="fas fa-star"></i> <br />
                {this.state.users.skill2}: {this.state.users.skill2_level} <i class="fas fa-star"></i> <br />
                {this.state.users.skill3}: {this.state.users.skill3_level} <i class="fas fa-star"></i> <br />
                {this.state.users.skill4}: {this.state.users.skill4_level} <i class="fas fa-star"></i> <br />
                        </Skill>
                        <Portfolio>

                            <a href={this.state.users.portfolio_url} >
                                <img src={this.state.users.portfolio_image} alt="Portfolio Image" />  <br /> </a>
                        </Portfolio>

                    </InfoStyle>
                </Page>
                {/* <Navbar/> */}

            </div>
        );
    }
}

export default ProfileShow;