import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to="/dashboard"> 🏠</Link>
                    <Link to="/profile/:userId">👤</Link>
                    <Link to="/upload"> ✚</Link>
                    {/* <Link to="/">💬</Link> */}
                    {/* <Link to="/"> 🔔</Link> */}


            </div>
        );
    }
}

export default Navbar;