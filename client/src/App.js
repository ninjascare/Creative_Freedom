import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";

import OnboardingPage from "./components/Onboarding/OnboardingIndex";
import Login from "./components/Users/Login";
import MemberShow from "./components/Users/MemberShow";
import ProfileShow from "./components/Users/ProfileShow";
import MemberList from "./components/Users/MemberList";
import UploadContent from "./components/Users/UploadContent";
import PostIndex from "./components/Post/PostIndex";
import UserSettings from "./components/Users/UserSettings";
import CreateProfile from "./components/Onboarding/CreateProfile";
import PostShow from "./components/Post/PostShow";

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
              <Route exact path="/login" component={Login} />
              <Route exact path='/new' component={CreateProfile}/>
              <Route exact path="/member/:userId" component={MemberShow} />
              <Route exact path="/creators" component={MemberList} />
              <Route exact path="/profile/:userId/upload" component={UploadContent} />
              <Route exact path="/profile/:userId" component={ProfileShow} />
              <Route exact path="/profile/:userId/settings" component={UserSettings} />

              {/* routes for posts */}
              <Route path="/posts" component={PostIndex} />
              <Route path="/post/:postId" component={PostShow} />

              

            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
