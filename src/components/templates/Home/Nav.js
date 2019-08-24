import React from 'react';

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            condition: props.condition
        };
      }
      componentWillReceiveProps(nextProps) {
        if (nextProps.width !== this.state.width) {
        //   this.setState({ condition: nextProps.condition, width: nextProps.width});
        }
      }
    render() {
        let toggleHamburger = this.props.toggleHamburger;
        if(this.state.width < 750)
            return(
                <nav style={{display: this.state.condition==='open' ? 'block' : 'none'}}>
                    <ul>
                        <li><a href="/#home"  onClick={() => toggleHamburger()}>Home</a></li>
                        <li><a href="/#about"  onClick={() => toggleHamburger()}>About</a></li>
                        <li><a href="/#books"  onClick={() => toggleHamburger()}>Books</a></li>
                        <li><a href="/#reviews"  onClick={() => toggleHamburger()}>Reviews</a></li>
                    </ul>
                </nav>
            )
        else {
            return(
                <nav style={{display: this.state.condition==='open' ? 'block' : 'none'}}>
                    <ul>
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#books">Books</a></li>
                        <li><a href="/#reviews">Reviews</a></li>
                    </ul>
                </nav>
            )
        }
    }
}
