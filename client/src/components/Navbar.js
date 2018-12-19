import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
letter-spacing: 35px;
a:visited{
  color: white;
}
`
class Navbar extends Component {

  render() {
    return (
      <Nav>
        <div>
          <IconStyle>

            <div className="App">
              <h3>   <Link to="/creators">  <i class="fas fa-home"></i></Link>
                <Link to="/profile/:userId"> <i class="fas fa-user-alt"></i></Link>
                <Link to="/profile/:userId/upload"> <i class="fas fa-plus-circle"></i> </Link>
                <Link to="/interests"> <i class="fas fa-theater-masks"></i></Link>
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
