import styled from "styled-components";

const AOut = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer"
})`
  color: hsla(0, 0%, 0%, 0.75);
  padding: 0;
  &:hover {
    color: orange !important;
  }
`;

export default AOut;
