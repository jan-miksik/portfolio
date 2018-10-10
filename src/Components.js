import React from "react";
import styled from "styled-components";

import Carousel from "./componentsPage/Carousel";
import Tooltip from "./componentsPage/Tooltip";

const ComponentsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;

export default class Components extends React.Component {
  render() {
    return (
      <section>
        <ComponentsPage>
          <Carousel />
          <br />
          <Tooltip />
        </ComponentsPage>
      </section>
    );
  }
}
