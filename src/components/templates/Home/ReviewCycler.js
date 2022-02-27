import React from 'react';
import {Reviews} from './Reviews';

export class ReviewCycler extends React.Component {
    constructor(props) {
        super(props);
        this.state={index:0};
    }
    componentDidMount() {
        this.interval = setInterval(()=> {
            let {
                index
            } = this.state;
            if(index === 7) {
                this.setState({index: 0})
            }
            else {
            this.setState({index: index + 1})
            }
        },
        10000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }
    render() {
        return (
          <div id="reviews">
            <h2 className="purple">Reviews</h2>
            <picture>
              <source srcSet="/images/sammy-cover-medal.webp" type="image/webp" />
              <img
                src="/images/sammy-cover-medal.jpg"
                className="sammy-cover-reviews"
                alt="Sammy's Day at the Fair - Available Now!"
              />
            </picture>
            <Reviews index={this.state.index} />
          </div>
        );
   }
}
