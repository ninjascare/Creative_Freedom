import React, { Component } from "react";
import "../../styles.css";
import Onboarding1 from "../Onboarding/Onboarding1";
import Onboarding2 from "../Onboarding/Onboarding2";
import Onboarding3 from "../Onboarding/Onboarding3";
import Onboarding4 from "../Onboarding/Onboarding4";

class OnboardingPage extends Component {
  render() {
    return (
      <div>
        <h1>Hello from the Onboarding Index page of swagginess</h1>
        <Onboarding1 />
        <Onboarding2 />
        <Onboarding3 />
        <Onboarding4 />
      </div>
    );
  }
}

export default OnboardingPage;
