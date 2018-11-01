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
          <H3>Text-counter</H3>
          <AOut project href="https://codepen.io/jan-miksik/full/EpZpJO/">
            <ImgW
              src="https://raw.githubusercontent.com/jan-miksik/images/master/re-text-counter.png"
              alt="text-counter"
            />
          </AOut>
        </ArticleContainer>
        <Equalizer />
        <ArticleContainer>
          <H3>Notes</H3>
          <AOut project href="https://9o07lr0l0p.codesandbox.io/">
            <ImgW src="https://raw.githubusercontent.com/jan-miksik/images/master/notes.png" />
          </AOut>
        </ArticleContainer>
        <ArticleContainer>
          <H3>Random Quote Machine</H3>
          <AOut project href="https://codepen.io/jan-miksik/full/EdqKxo/">
            <ImgW src="https://raw.githubusercontent.com/jan-miksik/images/master/portfolio-projects/random-quote-machine.png" />
          </AOut>
        </ArticleContainer>
      </WorkContainer>
    );
  }
}
