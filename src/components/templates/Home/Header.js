import React from 'react';
import {Nav} from './Nav';
const hamburgerStates = require('../../../js/hamburger-states');

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {condition: this.props.condition};
      }
    componentWillReceiveProps(nextProps) {
        if (nextProps.condition !== this.state.condition) {
          this.setState({ condition: nextProps.condition });
        }
      }
    render() {
        let toggleHamburger = this.props.toggleHamburger;
        if(this.state.condition === "open") {
            return(
                <header>
                    <img src='./images/artwrite-logo.png' alt="ArtWrite Productions Logo" className="logo"/>
                    <img src={hamburgerStates.open.src} className={hamburgerStates.open.className} alt={hamburgerStates.open.alt} onClick={() => toggleHamburger()}/>
                    <Nav condition={this.state.condition}/>
                </header>
            )
        }
        else {
            return(
                <header>
                    <img src='./images/artwrite-logo.png' alt="ArtWrite Productions Logo" className="logo"/>
                    <img src={hamburgerStates.closed.src} className={hamburgerStates.closed.className} alt={hamburgerStates.closed.alt} onClick={() => toggleHamburger()}/>
                    <Nav condition={this.state.condition}/>
                </header>
            )
        }
    }
}