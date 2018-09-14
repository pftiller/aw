import React from 'react';
// import {Nav} from './Nav';
const hamburgerStates = require('../../../js/hamburger-states');

export class HeaderContents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {condition: this.props.condition};
        this.closeNavigation = this.closeNavigation.bind(this);
      }
    componentWillReceiveProps(nextProps) {
        if (nextProps.condition !== this.state.condition) {
          this.setState({ condition: nextProps.condition });
        }
      }
    closeNavigation(){
        this.setState({ condition: "closed" });
    }  
    render() {
        let toggleHamburger = this.props.toggleHamburger;
        if(this.state.condition === "open") {
            return(
                <div>
                    <img src='./images/artwrite-logo.png' alt="ArtWrite Productions Logo" className="logo"/>
                    <img src={hamburgerStates.open.src} className={hamburgerStates.open.className} alt={hamburgerStates.open.alt} onClick={() => toggleHamburger()}/>
                </div>
            )
        }
        else {
            return(
                <div>
                    <img src='./images/artwrite-logo.png' alt="ArtWrite Productions Logo" className="logo"/>
                    <img src={hamburgerStates.closed.src} className={hamburgerStates.closed.className} alt={hamburgerStates.closed.alt} onClick={() => toggleHamburger()}/>
                    {/* <Nav condition={this.state.condition} onClick={this.closeNavigation}/> */}
                </div>
            )
        }
    }
}