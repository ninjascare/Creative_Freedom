import React, { Component } from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

class Onboarding4 extends Component {
  render() {
    return (
      <div>
        <div className="flexContainer">
          <Link to="/login">
            <button className="buttonStyle">Log In</button>
          </Link>

          <button className="buttonStyle">Register With Code</button>
        </div>
      </div>
    );
  }
}

export default Onboarding4;
