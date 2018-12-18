import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
//
//const Nav = styled.div`
//  background-color: black;
//  background-position: fixed;
//  display: flex;
//  justify-content: space-around;
//  align-items: center;
//  padding: 10px 5vw;
//  height: 25px;
//
//`


function NavBar(props) {
  const logged_out_nav = (
    <ul>
      <li onClick={() => props.display_form('login')}>login</li>
      <li onClick={() => props.display_form('signup')}>signup</li>
    </ul>
  );

  const logged_in_nav = (
    <ul>
      <li onClick={props.handle_logout}>logout</li>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default NavBar;

NavBar.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};

//////    render() {
//////        return (
//////            <Nav>
//////            <div>
//////                <Link to="/dashboard"> 🏠 </Link>
//////                    <Link to="/profile/:userId"> 👤 </Link>
//////                    <Link to="/upload"> ✚ </Link>
//////                    {/* <Link to="/"> 💬 </Link> */}
//////                    {/* <Link to="/"> 🔔</Link> */}
//////
//////
//////            </div>
//////            </Nav>
//////        );
//////    }
////}

