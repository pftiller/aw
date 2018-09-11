import React from 'react';

export class Nav extends React.Component {
    render() {
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
