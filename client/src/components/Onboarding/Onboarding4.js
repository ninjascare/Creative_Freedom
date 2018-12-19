import React, { Component } from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

class Onboarding4 extends Component {
  render() {
    return (
      <div>
        <div className="flexContainer">
          
          <Link to={`/new`}>
          <button className="buttonStyle">Join the Network</button>
          </Link>

          <Link to={`/posts`}>
          <button className="buttonStyle">Skip Button</button>
          </Link>

        </div>
      </div>
    );
  }
}

export default Onboarding4;
