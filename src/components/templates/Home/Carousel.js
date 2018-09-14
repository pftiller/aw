import React from 'react';
import {Arrows} from './Arrows';
let green = '/images/green.png';


export class Carousel extends React.Component {
    render() {
     let styles = {
        background: `url(${green}) bottom / 107% 94% no-repeat`
      }
      return (
        <div id="home" className="carousel" style={styles}>
            <h2 className="green">Welcome to ArtWrite Productions</h2>
            <Arrows/>
        </div>
      );
    };
};
  