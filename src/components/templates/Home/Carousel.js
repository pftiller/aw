import React from 'react';
import {Arrows} from './Arrows';
import ContentBlock from '../../utilities/ContentBlock';

let green = '/images/green.png';
let styles = {
    background: `url(${green}) bottom / 107% 615px no-repeat`
}


export class Carousel extends React.Component {
    render() {
      if (this.props.data) {

        const data = this.props.data;
      return (
        // <div id="home" className="carousel" style={styles}>
        //     <h2 className="green">Welcome to ArtWrite Productions</h2>
       
        //     <Arrows/>
            <article className="carousel">
					    <h1>{data.title.rendered}</h1>
					    <ContentBlock content={data.content.rendered} />
				    </article>
        // </div>
      );
    }
  	return null;
	};
};
  