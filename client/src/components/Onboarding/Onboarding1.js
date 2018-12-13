import React, { Component } from 'react';
// ↓ Boilerplate code for the css. Whenever you want to effect things from the styles.css file, just copy and paste this into whatever component you want and get steezy! ↓
import '../../styles.css';

class Onboarding1 extends Component {
    render() {
        return (
            <div className='onboarding1GlobalContainer' >
                
                <div className='flexContainer'>
            
               <div className='onboardingLogo'/> 

                <h1 className='onboardingText' >
                    An Exclusive Social Network for Creatives
                </h1>

               </div>

            </div>
        );
    }
}

export default Onboarding1;