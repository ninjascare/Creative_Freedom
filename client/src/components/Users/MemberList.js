import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export default class MemberList extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers = () => {
    axios.get("/api/user").then(res => {
      this.setState({ users: res.data });
    });
  };

  render() {
    return (
      <div>
        <h1>Hello from member MemberList</h1>
        {this.state.users.map(user => (
          <div key={user._id}>
            <Link to={'/member/:userId'}>
              <h2>{user.name}</h2></Link> <br />
            {user.title} <br />
            <img src={user.image_url} alt="dfg" />

          </div>
        ))}
      </div>
    );
  }
}
