import React from "react";
import Components from "./Components";
import Projects from "./Projects";
import { H1, H2 } from "./style/H";

export default class Work extends React.Component {
  render() {
    return (
      <div>
        <H1 work>Work</H1>

        <H2>Projects</H2>
        <Projects />
        <H2 component>Components</H2>
        <Components />
      </div>
    );
  }
}
