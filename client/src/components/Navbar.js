import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background-color: black;
  background-position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 3vw;
  height: 25px;
  font-size: 2vw;
  a:link {
    text-decoration: none;
  }
`;
const IconStyle = styled.div`
font-size: 5vw;
color: white;
// display: flex;
// justify-content: space-evenly;
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
          <Link to="/">  <i class="fas fa-home"></i></Link>
            
            <Link to="/profile/:userId"> <i class="fas fa-user-alt"></i></Link>
          <Link to="/profile/:userId/upload"> <i class="fas fa-plus-circle"></i> </Link>
          {/* <Link to="/"> <i class="fas fa-comment-alt"></i> </Link>
          <Link to="/"><i class="fas fa-bell"></i></Link> */}
          </div>
          </IconStyle>

        </div>
      </Nav>
    );
  }
}

export default Navbar;
