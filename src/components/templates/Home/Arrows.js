import React from 'react';
import { InnerImage } from './InnerImage';

export class Arrows extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {index: 0}; 
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.interval = setInterval(()=> {
            let index = this.state.index;
            if(index < 2) {
                index +=1
                this.setState({index: index});
            }
            else {
                this.setState({index: 0});
            }
        },
        8000);
    }
    handleClick(e){
        let className = e.target.className;
        if(className === 'left-arrow') {
            this.back();
            console.log(className);
        }
        else {
            console.log(className);    
            this.forward();
        }
    }
    back(){
        let index = this.state.index;
        if(index > 0) {
            index -=1
            this.setState({index: index});
        }
        else {
            this.setState({index: 2});
        }
    }
    forward(){
        let index = this.state.index;
        if(index < 2) {
            index +=1
            this.setState({index: index});
        }
        else {
            this.setState({index: 0});
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }
    render() {
        return(
            <div className="buttons">
                <img src='./images/svgs/left-chevron.svg' alt="Left Chevron" className="left-arrow" onClick={this.handleClick}/>
                <img src='./images/svgs/right-chevron.svg' alt="Right Chevron" className="right-arrow" onClick={this.handleClick}/>
                <InnerImage index={this.state.index}/>
            </div>
        )
    }
}

