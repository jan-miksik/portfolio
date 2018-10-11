// inspired by https://www.youtube.com/watch?v=1PzjcBI3uak
// and https://codepen.io/VoloshchenkoAl/pen/jBPEzG

import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import AOut from "../style/AOut";
import { H3 } from "../style/H";
import { ArticleContainer } from "../style/WorkPage";

const ContainerTraingleArrow = styled.div.attrs({
  onClick: props => props.onClick
})`
cursor: pointer;
background-color: transparent;
opacity: 0.8;
min-width: 20%
display: flex;
justify-content: ${props => (props.primary ? "flex-end" : "flex-start")};
padding: 0.3rem;
z-index: 1;
:hover {
  opacity: 0.35;
}
`;

const TriangleArrow = styled.div.attrs({
  onClick: props => props.onClick
})`
  align-self: center;
  cursor: pointer;
  width: 0;
  height: 0;
  border-radius: 50px;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 40px solid black;
  z-index: 500;
  opacity: 1;
  transform: rotate(${props => (props.primary ? "" : "180deg")});
  :hover {
    opacity: 1;
  }
`;

const fade = keyframes`
    from {
        opacity: .4
    }
    to {
        opacity: 0.9
    }
}
`;

const Img = styled.div`
      display: flex;
      background: ${props => `url(${props.background})`};
      background-position: center;
      background-size: cover;
      min-width: 80%;
      object-fit: cover;
      height: 350px;
      justify-content: space-between;
      /*animation: ${fade} 1.5s linear;*/
    `;

const Content = styled.div`
  align-self: flex-end;
  background: rgba(0, 0, 0, 0.65);
  border-radius: 3px;
  color: beige;
  display: flex;

  padding: 0;
  margin: 0.5rem;
  padding: 0.5rem;
  z-index: 5;
`;

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImg: 0,
      images: [
        "https://raw.githubusercontent.com/jan-miksik/colections-jm/master/public/images/car_2_676x450.jpg",
        "https://raw.githubusercontent.com/jan-miksik/colections-jm/master/public/images/car_main_676x450.jpg",
        "https://raw.githubusercontent.com/jan-miksik/colections-jm/master/public/images/car_3_674x450.jpg"
      ],
      content: [
        "Short text about picture.",
        "Additional info.",
        "Here can be desctiption."
      ]
    };
  }

  onNextClick = () => {
    if (this.state.currentImg < this.state.images.length - 1) {
      this.setState(prevState => {
        return {
          currentImg: prevState.currentImg + 1
        };
      });
    } else {
      this.setState(() => {
        return {
          currentImg: 0
        };
      });
    }
  };

  onPrevClick = () => {
    if (this.state.currentImg === 0) {
      this.setState(prevState => {
        return {
          currentImg: prevState.images.length - 1
        };
      });
    } else {
      this.setState(prevState => {
        return {
          currentImg: this.state.currentImg - 1
        };
      });
    }
  };

  render() {
    let index = this.state.currentImg;
    return (
      <ArticleContainer>
        <H3>Carousel</H3>
        <br />
        <AOut
          href="https://codesandbox.io/s/oqrw3q3vm6"
          title="link to source code on CodeSnadbox"
        >
          codesandbox
        </AOut>
        <br />
        <br />
        <Img background={this.state.images[index]}>
          <ContainerTraingleArrow onClick={this.onNextClick}>
            <TriangleArrow />
          </ContainerTraingleArrow>
          <Content>{this.state.content[index]}</Content>
          <ContainerTraingleArrow primary onClick={this.onNextClick}>
            <TriangleArrow primary />
          </ContainerTraingleArrow>
        </Img>
      </ArticleContainer>
    );
  }
}
