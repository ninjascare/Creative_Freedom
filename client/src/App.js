import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";
import OnboardingPage from "./components/Onboarding/OnboardingIndex";
import Login from "./components/Users/Login";
import MemberShow from "./components/Users/MemberShow";
import ProfileShow from "./components/Users/ProfileShow";
import MemberList from "./components/Users/MemberList";
import Register from "./components/Users/Register";
import UploadContent from "./components/Users/UploadContent";
import PostIndex from "./components/Post/PostIndex";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Users/Dashboard";
import UserSettings from "./components/Users/UserSettings";

class App extends Component {
  render() {
    return (
      <div>
        {/* This handles all of our routing stuff. */}
        <Router>
          <div>
            {/* ↓ Later we must move this to all the necessary pages. ↓ */}
            <Switch>
              
              {/* routes for users */}
              <Route exact path="/" component={OnboardingPage} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/member/:userId" component={MemberShow} />
              <Route path="/profile/:userId" component={ProfileShow} />
              <Route path="/creators" component={MemberList} />
              <Route path="/register" component={Register} />
              <Route path="/upload" component={UploadContent} />
              <Route path="/settings" component={UserSettings} />

              {/* routes for posts */}
              <Route path="/posts" component={PostIndex} />


            </Switch>
            <Navbar/>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
