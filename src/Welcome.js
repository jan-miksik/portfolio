import React from "react";
import styled from "styled-components";

const WelcomeS = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem 0 4rem;
  justify-content: center;
  height: 95vh;
  background-color: lightblue;
  h1 {
    font-size: 3rem;
    color: beige;
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
