import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";

const Container = styled.div`
  color: white;
  font-size: 2vw;
  text-align: center;
  height: 90vh;
  background-image: url(https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/48390786_10156408149202499_4145714833116889088_n.jpg?_nc_cat=108&_nc_ht=scontent-atl3-1.xx&oh=40281052363d349d739d49af88963f24&oe=5CD5991F);
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -2.8%;

  @media only screen and (min-device-width: 320px) and (max-width: 480px) {
     {
       {
        height: 100vh;
        margin-top: -7%;
        font-size: 5vw;
      }
    }
  }
`;
const InterestBtns = styled.div`
button{
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
    z-index: 1;
    height: 42px;
    width: 5.5em;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.702);
    margin-top: 3%;


    @media only screen and (min-device-width: 320px) and (max-width: 480px) {
        {
margin-top: 1%;
       }
     }

    `;
const ContBtn = styled.div`
  button {
    font-size: 30px;
    // font-weight: 900;
  }
`;

class Interest extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>INTERESTS</h1>
          <h2>What Motivates You?</h2>
          {/* <img src="../images/pinkGlazedDonutBlur.png" alt="donut" /> */}
          <InterestBtns>
            <button>Blogger</button>
            <button>Business</button>
            <button>Beauty</button>
            <button>Dance</button>
            <button>Drawing</button>
            <button>Arts</button>
            <button>Fashion</button>
            <button>Film</button>
            <button>Food</button>
            <button>Music</button>
            <button>Painting</button>
            <button>Photo</button>
            <button>Producing</button>
            <button>Sculpting</button>
            <button>Paint</button>
            <button>Theater</button>
            <button>Writing</button>
            <ContBtn>
              <br />
              <button>Continue</button>
            </ContBtn>
          </InterestBtns>
        </Container>

        <Navbar />
      </div>
    );
  }
}

export default Interest;
