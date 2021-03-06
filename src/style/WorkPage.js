import styled from "styled-components";

export const WorkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  background-image: ${props =>
    props.component
      ? "linear-gradient(hsl(90,60%,35%), hsl(100,57%,30%))"
      : "linear-gradient(hsl(180,30%,30%), hsl(190,30%,30%))"};
`;

export const Equalizer = styled.div`
display: flex;
flex-basis: 0%;
@media (min-width: 1150px) {
    flex-basis: 6%;
  }
`;

export const ArticleContainer = styled.article`
  max-width: 500px;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  margin: 4rem 1rem 2rem 1rem;
  text-align: left;
 border: 2px solid hsla(100, 50%, 70%, 0.2);
  background-color: hsla(100, 50%, 70%, 0.3);
  
`;
