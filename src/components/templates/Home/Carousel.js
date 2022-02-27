import React from "react";
import { Arrows } from "./Arrows";

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  render() {
    return (
      <div id="home" className="carousel">
        <h2 className="green">Welcome to ArtWrite Productions</h2>
        <Arrows index={this.state.index} />
      </div>
    );
  }
}
