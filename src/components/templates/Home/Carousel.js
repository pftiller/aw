import React from 'react';
import {Arrows} from './Arrows';

export class Carousel extends React.Component {
    render() {
      return (
        <div id="home" className="carousel" style={this.props.style}>
            <h2 className="green">Welcome to ArtWrite Productions</h2>
            <Arrows/>
        </div>
      );
    };
};
  