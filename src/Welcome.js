import React from "react";
import styled from "styled-components";

const WelcomeS = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 4rem 0 4rem;
  justify-content: center;
  height: 100vh;
  background-color: lightsteelblue;
  h1 {
    font-size: 2rem;
    color: hsla(2, 50%, 100%, 0.91);
  }
  h2 {
    font-size: 1.2rem;
  }
  @media (min-width: 480px) {
    h2 {
    font-size: 1.7rem;
  }
   h1 {
    font-size: 3rem;
  }
  }
`;

export default class Welcome extends React.Component {
  render() {
    return (
      <WelcomeS>
        <h1>Welcome, I'm Jan Mikšík</h1>
        <h2>a web developer</h2>
      </WelcomeS>
    );
  }
}
