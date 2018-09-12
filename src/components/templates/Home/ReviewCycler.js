import React from 'react';
import {Reviews} from './Reviews';

export class ReviewCycler extends React.Component {
    constructor(props) {
        super(props);
        this.state={index:0};
    }
    componentDidMount() {
        this.interval = setInterval(()=> {
            let index = this.state.index;
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
            <div id="reviews" style={this.props.style}>
                    <h2 className="purple">Reviews</h2>
                    <img src="./images/sammy-cover.jpg" className="sammy-cover" alt=""/>
                        <Reviews index={this.state.index}/>
                </div>
        )
   }
}
