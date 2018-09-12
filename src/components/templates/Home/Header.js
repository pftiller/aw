import React from 'react';
import {Nav} from './Nav';
const hamburgerStates = require('../../../js/hamburger-states');

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {condition: this.props.condition};
      }
    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.condition !== this.state.condition) {
          this.setState({ condition: nextProps.condition });
        }
      }
    render() {
        let toggleHamburger = this.props.toggleHamburger;
        return(
            <header>
                <img src='./images/artwrite-logo.png' alt="ArtWrite Productions Logo" className="logo"/>
                <img src={hamburgerStates[this.props.condition].src} className={hamburgerStates[this.props.condition].className} alt={hamburgerStates[this.props.condition].alt} onClick={() => toggleHamburger()}/>
                <Nav condition={this.state.condition}/>
            </header>
        )
    }
}