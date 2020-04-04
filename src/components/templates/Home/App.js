import React, {Component} from 'react';
import {HeaderContents} from './Header';
import {Carousel} from './Carousel';
import {About} from './About';
import {Books} from './Books';
import {ReviewCycler} from './ReviewCycler';
import {Footer} from './Footer';
import '../../../css/styles.css';
import * as firebase from 'firebase/app';
import firebaseCredentials from '../../firebase/firebase';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }
    componentDidMount() {
        firebase.initializeApp({firebaseCredentials});
        window.addEventListener("resize", this.onResize);
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