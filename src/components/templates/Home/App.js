import React, {Component} from 'react';
import {HeaderContents} from './Header';
import {Carousel} from './Carousel';
import {About} from './About';
import {Books} from './Books';
import {ReviewCycler} from './ReviewCycler';
import {Footer} from './Footer';
import '../../../css/styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.onResize);
    //     Modernizr.on('img/webp', function( result ) {
    //         if (result) {
    //             document.documentElement.classList.add('webp')
    //         }
    //         else {
    //             document.documentElement.classList.add('no-webp')
    //         }
    //     })
    }
    onResize = () => {
        this.setState({
            width: window.innerWidth
        })
    }
    componentWillUnmount() {
        window.addEventListener("resize", this.onResize);
    }
    render() {

        return (
            <div>
                <div className="App-intro">
                    <header className="header-down">
                        <HeaderContents width={this.state.width}/>
                    </header>
                    <main>
                        <Carousel />
                        <About />
                        <Books />
                        <ReviewCycler />
                        <Footer/>
                    </main>
                </div>
            </div>
        );
    }
}

export default App;