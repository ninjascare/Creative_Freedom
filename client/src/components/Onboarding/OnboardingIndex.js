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
                <button>Dummy button [Link to User Login Page]</button>

                <div className='onboarding1'>
                <Onboarding1/>
                </div>

                <div className='onboarding2'>
                <Onboarding2/>
                </div>

                <div className='onboarding3'>
                <Onboarding3/>
                </div>

                <div className='onboarding4'>
                <Onboarding4/>
                </div>
                
            </div>
        );
    }
}

export default OnboardingPage;
