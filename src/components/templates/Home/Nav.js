import React from 'react';

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {condition: this.props.condition, width: this.props.width};
      }
      componentWillReceiveProps(nextProps) {
        if (nextProps.width !== this.state.width) {
          this.setState({ condition: nextProps.condition });
        }
      }
    render() {
        let toggleHamburger = this.props.toggleHamburger;
        if(this.props.width < 670)
            return(
                <nav style={{display: this.props.condition==='open' ? 'block' : 'none'}}>
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
                <nav style={{display: this.props.condition==='open' ? 'block' : 'none'}}>
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
