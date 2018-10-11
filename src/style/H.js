import styled from "styled-components";

export const H1 = styled.h1`
  color: hsla(0, 0%, 0%, 0.83);
  background-image: ${props =>
    props.work ? "linear-gradient( lightsteelblue, white)" : "palevioletred"};
  margin: 0;
  padding: 1rem;
  font-size: 2.3rem;
  font-weight: 300;
`;
export const H2 = styled.h2`
  background-image: ${props =>
    props.component
      ? "linear-gradient( yellow, red,)"
      : "linear-gradient(white white)"};
  color: hsla(0, 0%, 0%, 0.75);
  margin: 0;
  padding: 1rem;
  font-weight: 400;
  font-size: 1.8rem;
`;
// hsla(49, 35 %, 72 %, 1);
export const H3 = styled.h3`
  background-color: ${props =>
    props.contact ? "sienna" : "hsla(210, 50%, 30%, 1)"};
  margin:  ${props => (props.contact ? "0" : "-1.5rem -1.15rem 1rem -1.15rem")}
  border-radius: ${props => (props.contact ? "0" : "7px 7px 0 0;")};
  color: hsla(0, 0%, 0%, 0.75);
  padding: ${props => (props.contact ? "5rem" : "1rem")};
  font-weight: 400;
  font-size: 1.5rem;
  z-index: 1;
  color: gainsboro;
`;
