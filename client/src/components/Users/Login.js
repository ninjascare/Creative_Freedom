import React, { Component } from "react";
import CreateProfile from "./CreateProfile";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>In order to enter you must Login:</h1>
        <h3>Please login or fill out this form to become a member</h3>
        <CreateProfile {...this.props} />
      </div>
    );
  }
}

export default Login;
