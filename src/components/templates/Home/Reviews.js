import React from 'react';
import {reviews} from '../../../js/reviews';
export class Reviews extends React.Component {
    render() {
        return (
            <div className="quotes">
                <img src='./images/svgs/start-quotes.svg' alt="Beginning Quotes" className="quote-marks for-reviews"/>
                <p className="quote">{reviews[this.props.index].quote}</p>
                <img src='./images/svgs/end-quotes.svg' alt="Closing Quotes" className="quote-marks for-reviews"/>
                <p className="cite"> - {reviews[this.props.index].reviewer}, {reviews[this.props.index].award}</p>
                <p className="cite">{reviews[this.props.index].affiliation}, {reviews[this.props.index].location}</p>
            </div>
        );
    }
}