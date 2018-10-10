import React from "react";
import styled from "styled-components";
import AOut from "./style/AOut";
import { H1, H2, H3 } from "./style/H";

const Email = styled.span`
  color: hsla(0, 0%, 0%, 0.75);
`;
export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <H1>Contact</H1>
        <H3>
          <AOut href="https://www.linkedin.com/in/jan-miksik/en">LinkedIn</AOut>
          {" | "}
          <AOut href="https://github.com/jan-miksik">Github</AOut>
          {" | "}
          <AOut href="https://codepen.io/jan-miksik/">Codepen</AOut>
          {" | "}
          <AOut>CodeSandbox</AOut>
          {" | "}
          <Email>jan.miksik@email.cz</Email>
        </H3>
        <br />
        <br />
      </div>
    );
  }
}
