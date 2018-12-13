import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import axios from "axios";

const Page = styled.div`
overflow-x: hidden; 
overflow-y: scroll; 
width: 102vw;
img{
    max-width: 100vw;
    max-height: 100vh;      
   }

`
const Header = styled.div`
font-size: 2vw;
background-color: white;
border-bottom: 1px solid black;
display: flex;
justify-content: space-around;

`

const Content = styled.div`
font-size: 2vw;
background-color: rgb(181, 180, 180);
width: 100vw;

`
const ImgStyle = styled.div`
display: flex;
justify-content: space-around;

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
                        <h2>Profile</h2>
                        <h2>Posts</h2>
                    </Header>
                    <Content>
                        {this.state.users.title} <br />
                        <ImgStyle>
                            <img src={this.state.users.image_url} alt="profile pic" />
                        </ImgStyle>

                    </Content>
                </Page>
            </div>
        );
    }
}

export default ProfileShow;