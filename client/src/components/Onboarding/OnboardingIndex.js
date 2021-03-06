import React, { Component } from "react";
import styled from "styled-components";
import "../../styles.css";
import Onboarding1 from "../Onboarding/Onboarding1";
import Onboarding2 from "../Onboarding/Onboarding2";
import Onboarding3 from "../Onboarding/Onboarding3";
import Onboarding4 from "../Onboarding/Onboarding4";

const BrightDots = styled.div`
  a:active {
    background-color: white;
  }
  a:hover {
    background-color: white;
  }
`;

class OnboardingPage extends Component {
  render() {
    return (
      <div>
        {/* ↓ next task is getting these circles to act as link buttons for the scroll functionality to work! ↓ */}

        <div className="onboardingSlideContainer">
          <div className="dotContainer">
            <BrightDots>
              <a href="#board1" className="dotSelectors" id="one" />

              <a href="#board2" className="dotSelectors" id="two" />

              <a href="#board3" className="dotSelectors" id="three" />

              <a href="#board4" className="dotSelectors" id="four" />
            </BrightDots>
          </div>

          <div className="onboarding1" id="board1">
            <Onboarding1 />
          </div>

          <div className="onboarding2" id="board2">
            <Onboarding2 />
          </div>

          <div className="onboarding3" id="board3">
            <Onboarding3 />
          </div>

          <div className="onboarding4" id="board4">
            <Onboarding4 />
          </div>
        </div>
      </div>
    );
  }
}

export default OnboardingPage;
