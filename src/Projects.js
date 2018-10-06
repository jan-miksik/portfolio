import React from "react";
import AOut from "./style/AOut";
import styled from "styled-components";

const ImgW = styled.img`
  width: 350px;
  max-width: 100%;
  margin-bottom: 0.9rem;
  border-radius: 10px 10px 0 0;
  display: block;
`;

const ProjectsContainer = styled.section`
  background-color: darkslategray;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const ProjectChunk = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px;
  color: hsla(0, 0%, 0%, 0.15);
  font-size: 1.2rem;
  padding: 0 0 15px 0;
  border-radius: 15px;
  background-color: hsla(210, 80%, 60%, 0.6);
  &:hover {
    color: orange;
  }
`;

export default class Projects extends React.Component {
  render() {
    return (
      <ProjectsContainer>
        <ProjectChunk>
          <AOut href="https://codepen.io/jan-miksik/full/EpZpJO/">
            <ImgW
              src="https://raw.githubusercontent.com/jan-miksik/images/master/re-text-counter.png"
              alt="text-counter"
            />
            Text-counter
          </AOut>
        </ProjectChunk>
        <ProjectChunk>
          <AOut href="https://9o07lr0l0p.codesandbox.io/">
            <ImgW src="https://raw.githubusercontent.com/jan-miksik/images/master/notes.png" />
            Notes
          </AOut>
        </ProjectChunk>
      </ProjectsContainer>
    );
  }
}
