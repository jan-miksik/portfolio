import React from "react";
import styled from "styled-components";
import { H3 } from "../style/H";
import AOut from "../style/AOut";
import { ArticleContainer } from "../style/WorkPage";

const Tooltip = styled.span`
  color: red;
  margin: 0;
  padding: 0;
  color: $tooltip - activ;
  position: relative;
  display: inline-block;
  :hover {
    color: black;
    text-decoration: underline dashed red; /*$tooltip - activ;*/
    text-underline-position: under;
  }
`;

const TooltipText = styled.span`

  font-size: 0.9rem;
  visibility: hidden;
  background-color: #0c2327;
  color: white; 
  text-align: center;
  padding: 7px 7px;
  border-radius: 6px;
  bottom: 115%;
  left: 50%;
  margin-left: -35px;
  position: absolute;
  z-index: 1;
  opacity: 1;
  transition: opacity 300ms;
}
${Tooltip}:hover & {
  visibility: visible;
  opacity: 1;
}
&::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #0c2327 transparent transparent transparent;
  } /*$tooltip-back*/
`;

const TooltipArticle = () => (
  <ArticleContainer>
    <H3>Tooltip</H3>
    <br />
    <AOut
      href="https://codesandbox.io/s/py8pj8j097"
      target="_blank"
      rel="noopener noreferrer"
    >
      codesandbox
    </AOut>{" "}
    - React {" | "}
    <AOut
      href="https://codepen.io/jan-miksik/pen/JZzVww"
      target="_blank"
      rel="noopener noreferrer"
    >
      codepen
    </AOut>{" "}
    pure css
    <br />
    <br />
    Above in source code are links for tooltip version in React, which is used
    in this site and previous version in pure{" "}
    <Tooltip>
      <TooltipText>Cascading Style Sheets </TooltipText> css
    </Tooltip>. Principes described below are similar for both version.
    <p>
      Text that appears in the tooltip is placed in a inline elemetn{" "}
      <code>span</code>. To display tooltip is used to <code>hover</code>{" "}
      <Tooltip>
        <TooltipText>select elements</TooltipText> selector
      </Tooltip>
      , which changes <code>opacity</code> property from 0 to 1 in a moment when
      the mouse is above the relevant text. Tooltip arrow is made by setting{" "}
      <code>border-color</code> where one side has{" "}
      <Tooltip>
        <TooltipText>same as the background</TooltipText> color
      </Tooltip>{" "}
      and others are <code>transparent</code>. Selector <code>::after</code>{" "}
      displays the arrow.
    </p>
  </ArticleContainer>
);

export default TooltipArticle;
