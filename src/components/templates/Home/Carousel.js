import React from 'react';
import {Arrows} from './Arrows';
let green = '/images/green.png';

export class Carousel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 0
      };
    }


    render() {
     let styles = {
        background: `url(${green}) bottom / 107% 94% no-repeat`
      }
      return (
        <div id="home" className="carousel" style={styles}>
            <h2 className="green">Welcome to ArtWrite Productions</h2>
            <Arrows index={this.state.index}/>
        </div>
      );
    };
};
  