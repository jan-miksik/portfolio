import React from "react";
import styled from "styled-components";
import Components from "./Components";
import Projects from "./Projects";

const WorkTitle = styled.h2`
color: hsla(0, 0%, 0%, 0.83);
background-color: hsla(49, 35%, 72%, 0.7);
margin: 0;
padding: 1rem;
font-size: 2.3rem;
font-weight: 300;
`;
const ProjectTitle = styled.h3`
background-color: hsla(49, 35%, 72%, 0.5);
color: hsla(0, 0%, 0%, 0.75);
margin: 0;
padding: 1rem;
font-weight: 400;
font-size: 1.5rem;
`;

export default class Work extends React.Component {
  render() {
    return (
      <div>
        <WorkTitle>Work</WorkTitle>
        <ProjectTitle>projects</ProjectTitle>
        <Projects />
        <Components />
      </div>
    );
  }
}
