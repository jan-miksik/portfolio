import React from "react";
import AOut from "./style/AOut";
import styled from "styled-components";

import { Equalizer, WorkContainer, ArticleContainer } from "./style/WorkPage";
import { H3 } from "./style/H";

const ImgW = styled.img`
  max-width: 100%;
  border-radius: 5px;
  display: block;
`;

export default class Projects extends React.Component {
  render() {
    return (
      <WorkContainer>
        <ArticleContainer>
          <AOut href="https://codepen.io/jan-miksik/full/EpZpJO/">
            <H3>Text-counter</H3>
            <ImgW
              src="https://raw.githubusercontent.com/jan-miksik/images/master/re-text-counter.png"
              alt="text-counter"
            />
          </AOut>
        </ArticleContainer>
        <Equalizer />
        <ArticleContainer>
          <AOut href="https://9o07lr0l0p.codesandbox.io/">
            <H3>Notes</H3>
            <ImgW src="https://raw.githubusercontent.com/jan-miksik/images/master/notes.png" />
          </AOut>
        </ArticleContainer>
      </WorkContainer>
    );
  }
}
