import styled from "styled-components";

const AOut = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
  title: "open new window"
})`
  color: hsla(0, 0%, 0%, 0.75);
  padding: 0;
  border-radius: 5px;
  svg:hover path {
    fill: lightgray;
    tr ansition: all ease 0.3s;
    }
  &:hover {
    color: orange !important;
    opacity: ${props => (props.icon ? "0.5" : "1")};
    box-shadow: ${props =>
      props.project ? "-2px 2px 30px 2px rgba(181,178,150,1)" : ""};
   
  }
`;

export default AOut;
