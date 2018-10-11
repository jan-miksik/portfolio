import React from "react";

import Carousel from "./componentsPage/Carousel";
import Tooltip from "./componentsPage/Tooltip";
import { Equalizer, WorkContainer } from "./style/WorkPage";

export default class Components extends React.Component {
  render() {
    return (
      <section>
        <WorkContainer>
          <Carousel />
          <Equalizer />
          <Tooltip />
        </WorkContainer>
      </section>
    );
  }
}
