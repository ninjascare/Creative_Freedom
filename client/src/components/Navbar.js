import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Nav = styled.div`
  background-color: black;
  background-position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 5vw;
  width: 90vw;
  height: 25px;
  border-bottom: 1px solid rgba(0,0,0,.0975);

  p{
    font-size: 1.75rem;
    font-family: 'Oleo Script', cursive;
    margin: 0;
    svg{
      margin-bottom: 5px;
    }
  }
`
class Navbar extends Component {
    render() {
        return (
            <Nav>
            <div>
                <Link to="/dashboard"> 🏠 </Link>
                    <Link to="/profile/:userId"> 👤 </Link>
                    <Link to="/upload"> ✚ </Link>
                    {/* <Link to="/"> 💬 </Link> */}
                    {/* <Link to="/"> 🔔</Link> */}


            </div>
            </Nav>
        );
    }
}

export default Navbar;