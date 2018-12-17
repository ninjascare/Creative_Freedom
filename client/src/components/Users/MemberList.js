import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <div className='memberListPageContainer'>
        <h1 className='memberListPageTop'><span>Connx</span> <span>Discover</span> <span>Events</span> (MemberList)</h1>

        {this.state.users.map(user => (
          <div key={user._id} className='userContainer'>

            <Link to={`/member/${user.id}`} className='peskyAtag'>
            
              <img src={user.image_url} alt="dfg" className='memberPic'/>
              
              
              <div className='userInfo1'>
              <h2>{user.name}</h2>
              <h2>{user.title}</h2>
              </div>

              <h2 className='userInfo2'>{user.headline}</h2>
            </Link>{" "}
            
             
          </div>
        ))}
      </div>
    );
  }
}
