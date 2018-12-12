import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";
import OnboardingPage from "./components/Onboarding/OnboardingIndex";

class App extends Component {
  render() {
    return (
      <div>
        {/* This handles all of our routing stuff. */}
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={OnboardingPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
