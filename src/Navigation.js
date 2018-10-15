import React from "react";
import styled from "styled-components";
import Scrollchor from "react-scrollchor";
import Work from "./Work";
import Contact from "./Contact";
import Welcome from "./Welcome";
const Scroll = styled(Scrollchor)`
margin: 0;
padding: 0;
`;

const Navbar = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;

  width: 100%;
  background-image: linear-gradient(lightblue, lightsteelblue);
  opacity: 1;
  top: 0;
  margin:0;
  padding: 1.7rem 0 1.1rem  0;
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
          <Scroll to="#welcome">
            <a> About </a>
          </Scroll>
          <Scroll animate={{ offset: -70 }} to="#work">
            <a> Work </a>
          </Scroll>
          <Scroll to="#contact">
            <a> Contact </a>
          </Scroll>
        </Navbar>
        <div id="welcome">
          <Welcome />
        </div>
        <div id="work">
          <Work />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}
