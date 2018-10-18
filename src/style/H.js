import styled from "styled-components";

export const H1 = styled.h1`
  color: hsla(0, 0%, 0%, 0.83);
  background-image: ${props =>
    props.work
      ? "linear-gradient( lightsteelblue, white 30% )"
      : "palevioletred"};
  margin: 0;
  padding: 1rem;
  font-size: 2.3rem;
  font-weight: 300;
  border-bottom: ${props =>
    props.work ? "5px solid darkslategray" : "5px solid orangered"}
    ;
  border-top: ${props =>
    props.work ? "1px solid hsla(220, 50%, 79%, 1)" : "3px solid gray"};
`;
// lightsteelblue
export const H2 = styled.h2`
  background-image: ${props =>
    props.component
      ? "linear-gradient(hsla(120, 50%, 30%, 1), hsla(110, 50%, 26%, 1))"
      : "linear-gradient(hsl(220, 50%, 30%), hsl(210, 50%, 25%))"};
  color: hsla(0, 20%, 85%, 1);
  margin: 0;
  padding: 1rem;
  font-weight: 400;
  font-size: 1.8rem;
  border-bottom: ${props =>
    props.component
      ? "2px solid hsl(130, 50%, 30%)"
      : "2px solid hsl(230, 50%, 30%)"}
`;
// hsla(49, 35 %, 72 %, 1);
export const H3 = styled.h3`
  background-color: ${props =>
    props.contact
      ? "sienna"
      : props.component
        ? "hsla(130, 50%, 30%, 1)"
        : "hsla(220, 40%, 30%, 1)"};
  margin:  ${props => (props.contact ? "0" : "-1.5rem -1.15rem 1rem -1.15rem")}
  border-radius: ${props => (props.contact ? "0" : "7px 7px 0 0;")};
  color: hsla(0, 0%, 0%, 0.75);
  padding: ${props => (props.contact ? "5rem" : "1rem")};
  font-weight: 400;
  font-size: 1.5rem;
  z-index: 1;
  color: gainsboro;
`;
