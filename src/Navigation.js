import React from "react";
import styled from "styled-components";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

import Work from "./Work";
import Contact from "./Contact";
import Welcome from "./Welcome";

configureAnchors({
  offset: -70,
  scrollDuration: 400,
  keepLastAnchorHash: true
});

const Navbar = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;

  width: 100%;
  background-image: linear-gradient(lightblue, lightsteelblue);
  opacity: 1;
  top: 0;
  margin:0;
  padding: 1.7rem 0 1.1rem 0;
  font-size: 1rem;
  z-index: 55;
`;

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <div />
          <div />
          <div />
          <div />
          <a href="#welcome"> About </a>
          <a href="#work"> Work </a>
          <a href="#contact"> Contact </a>
        </Navbar>
        <ScrollableAnchor id={"welcome"}>
          <Welcome />
        </ScrollableAnchor>
        <ScrollableAnchor id={"work"}>
          <Work />
        </ScrollableAnchor>
        <ScrollableAnchor id={"contact"}>
          <Contact />
        </ScrollableAnchor>
      </div>
    );
  }
}
