import React from 'react';
import {Arrows} from './Arrows';

let green = '/images/green.png';
let styles = {
    background: `url(${green}) bottom / 107% 615px no-repeat`
}


export class Carousel extends React.Component {
    render() {
      return (
        <div id="home" className="carousel" style={styles}>
            <h2 className="green">Welcome to ArtWrite Productions</h2>
            <Arrows/>
        </div>
      );
    };
};
  