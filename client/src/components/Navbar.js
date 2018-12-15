import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background-color: black;
  background-position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 5vw;
  height: 25px;
  font-size: 2vw;
  a:link {
    text-decoration: none;
  }
`;
class Navbar extends Component {
  render() {
    return (
      <Nav>
        <div>
          <Link to="/dashboard"> 🏠 </Link>
          <Link to="/profile/:userId"> 👤 </Link>
          <Link to="/profile/:userId/upload"> ✚ </Link>
          {/* <Link to="/"> 💬 </Link> */}
          {/* <Link to="/"> 🔔</Link> */}
        </div>
      </Nav>
    );
  }
}

export default Navbar;
