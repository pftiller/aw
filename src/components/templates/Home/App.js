import React, {
    Component
} from 'react';
import update from 'immutability-helper';
import ResizeDetector from 'react-resize-detector';
import {
    connect
} from 'react-redux';
import {
    HeaderContents
} from './Header';
import {
    Nav
} from './Nav';
import {
    Carousel
} from './Carousel';
import {
    About
} from './About';
import {
    Books
} from './Books';
import {
    ReviewCycler
} from './ReviewCycler';
import {
    Footer
} from './Footer';
import {
    api
} from '../../../js/api';
import '../../../js/scroll';
import '../../../css/styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.headerRef = React.createRef()
        this.state = {};
    }
    componentDidMount() {
        let width = this.headerRef.current.clientWidth;
        let condition = () => {
            if (width > 1200) {
                return "open"
            } else {
                return "closed"
            }
        }
        this.setState({
            width: width,
            condition: condition()
        })
    }
    onResize=()=> {
       return new Promise((width) => {
                if (width > 1200) {
                    return {
                        width: width,
                        condition: "open"
                    }
                } else {
                    return {
                        width: width,
                        condition: "closed"
                    }
                }
            }).then(resp=> {
                let newState = update(resp);
                this.setState({
                    newState
                })
            })
    }
    
    
    toggleHamburger() {
        if (this.state.condition === "closed" && this.state.width < 1200) {
            this.setState({
                condition: "closed"
            });
        } else if (this.state.condition === "open" && this.state.width > 1200) {
            this.setState({
                condition: "open"
            });
        } else {
            this.setState({
                condition: "open"
            });
        }
    }

render() {
        return (
            <div>
                <div className="App-intro">
                    <header className="header-down" ref={this.headerRef}>
                        <HeaderContents toggleHamburger={this.toggleHamburger} width={this.state.width} condition={this.state.condition}/>
                        {/* <Nav toggleHamburger={this.toggleHamburger}/> */}
                    </header>
                    <main>
                        <Carousel />
                        <About />
                        <Books />
                        <ReviewCycler />
                        <Footer/>
                       
                    </main>
                    <ResizeDetector handleWidth onResize={this.onResize} />
                </div>
            </div>
        );
    }
}
export default App;