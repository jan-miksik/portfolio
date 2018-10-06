import React from "react";
import styled from "styled-components";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

import Work from "./Work";
import Contact from "./Contact";
import Welcome from "./Welcome";

configureAnchors({
  offset: -60,
  scrollDuration: 400,
  keepLastAnchorHash: true
});

const Navbar = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid gray;
  width: 100%;
  top: 0;
  background-color: hsla(180, 100%, 25%, 0.9);
  padding: 0.7rem 0 0.3rem 0;
  font-size: 1.5rem;
  z-index: 5;
`;

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <div />
          <div />
          <div />
          <a href="#welcome"> About </a>
          <a href="#work"> Work </a>
          <a href="#contact"> Contact </a>
          <div />
          <div />
          <div />
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
