import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Nav = styled.div`
  background-color: black;
  background-position: fixed;
  margin-top: -2%;
  a:link {
    text-decoration: none;
  }
`;
const IconStyle = styled.div`
  font-size: 3vw;
  color: white;
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 30px;
  a:visited {
    color: white;
  }
`;
class Navbar extends Component {
  // state = {
  //   user:{}
  // }

  // componentDidMount() {
  //   const userId = this.props.match.params.userId;
  //   axios.get(`/api/user/${userId}`).then(res => {
  //     this.setState({
  //       users: res.data
  //     });
  //   });
  // }

  render() {
    return (
      <Nav>
        <div>
          <IconStyle>
            <div className="App">
              <h3>
                {" "}
                <Link to="/posts">
                  {" "}
                  <i class="fas fa-home" />
                </Link>
                <Link to="/creators">
                  {" "}
                  <i class="fas fa-users" />
                </Link>
                <Link to="/interests">
                  {" "}
                  <i class="fas fa-theater-masks" />
                </Link>
                <Link to={`/profile/33`}>
                  {" "}
                  <i class="fas fa-user-alt" />
                </Link>
                <Link to="/profile/33/upload">
                  {" "}
                  <i class="fas fa-plus-circle" />{" "}
                </Link>
                {/* Link to stretch goal components (Messages and Notifications) below */}
                {/* <Link to="/"> <i class="fas fa-comment-alt"></i> </Link>
          <Link to="/"><i class="fas fa-bell"></i></Link> */}
              </h3>
            </div>
          </IconStyle>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
