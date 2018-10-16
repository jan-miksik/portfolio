import styled from "styled-components";

const AOut = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
  title: "open new window"
})`
  color: hsla(0, 0%, 0%, 0.75);
  padding: 0;
  &:hover {
    color: orange !important;
    opacity: 0.8;
  }
`;

export default AOut;
