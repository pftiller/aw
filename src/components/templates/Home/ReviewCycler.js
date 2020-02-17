import React from 'react';
import Modernizr from '../../../../config/modernizr.config';
import {Reviews} from './Reviews';
let purple;
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
        if(Modernizr.webp) {
            purple = '/images/purple.webp';
         }
         else {
            purple = '/images/purple.png';
         }
        let styles = {
            background: `url(${purple}) center center / 105% 95% no-repeat`   
        }
      
        return (
            <div id="reviews" style={styles}>
                    <h2 className="purple">Reviews</h2>
                    <img src="./images/sammy-cover.jpg" className="sammy-cover" alt=""/>
                        <Reviews index={this.state.index}/>
                </div>
        )
   }
}
