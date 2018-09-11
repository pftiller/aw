import React from 'react';
import {images} from '../../../js/carousel-images';

export class InnerImage extends React.Component {
    render() {
      return (
        <div className="slide" style={images[this.props.index].styles}>
            <div className="grey-backdrop">
                <div className="caption">
                    <h3>{images[this.props.index].header}</h3>
                    <p>{images[this.props.index].caption}</p>
                </div>
            </div>
        </div>
      );
    }
  }
