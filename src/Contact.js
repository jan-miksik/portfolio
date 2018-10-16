import React from "react";
import styled from "styled-components";
import AOut from "./style/AOut";
import { H1, H3 } from "./style/H";
import IconSvg from "./svg/LinksSVG";

const Email = styled.span`
  color: hsla(0, 0%, 0%, 0.75);
`;

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <H1>Contact & Links</H1>
        <H3 contact>
          <AOut
            href="https://www.linkedin.com/in/jan-miksik/en"
            title="LinkedIn"
          >
            <IconSvg name="linkedin" width={100} />
            {/*<img
              src="https://raw.githubusercontent.com/jan-miksik/images/master/linkedInBlack.png"
              alt="LinkedIn"
            />*/}
          </AOut>
          <AOut href="https://github.com/jan-miksik" title="GitHub">
            <IconSvg name="github" width={100} />
            {/*<img
              //src="https://raw.githubusercontent.com/jan-miksik/images/master/GitHubLogo.png"
              //alt="GitHub"
            />*/}
          </AOut>
          <AOut href="https://codepen.io/jan-miksik/" title="Codepen">
            <IconSvg name="codepen" width={100} />

            {/*}  <img
              style={{ width: 70, height: 70 }}
              src="https://raw.githubusercontent.com/jan-miksik/images/master/codepen/CodepenBlackCircleBlackBg300.png"
              alt="CodePen"
            />*/}
          </AOut>
          <AOut href="https://codesandbox.io/u/jan-miksik" title="CodeSnadbox">
            <IconSvg name="sandbox" width={100} />
            {/*<img
              style={{ width: 70, height: 70 }}
              src="https://raw.githubusercontent.com/jan-miksik/images/master/codesandbox/codesandbox300.png"
              alt="CodeSandbox"
            />*/}
          </AOut>
          <br />

          <br />
          <Email>jan.miksik@email.cz</Email>
        </H3>
        <br />
        <br />
      </div>
    );
  }
}
