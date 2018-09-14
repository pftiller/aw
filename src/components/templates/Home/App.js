import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Header} from './Header';
import {Carousel} from './Carousel';
import {About} from './About';
import { Books } from './Books';
import { ReviewCycler } from './ReviewCycler';
import {Footer} from './Footer';
import { setWidth, setCondition} from '../../../reducer/api';
import '../../../css/styles.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {width: this.props.width, condition: this.props.condition};
        this.fetchWidth=this.fetchWidth.bind(this);
        this.toggleHamburger=this.toggleHamburger.bind(this);
      }
    componentWillMount() {
        if(!this.props.width) {
            this.props.updateWidth(window.innerWidth)
            if(window.innerWidth > 670) {
                this.props.updateCondition("open");
                this.setState({condition: "open"});
            }
            else {
                this.props.updateCondition("closed");
                this.setState({condition: "closed"});
            }
        }   
        this.setState({width: this.props.width})
        this.setState({pixelRatio: this.props.pixelRatio})
    }
    componentDidMount() {
        window.addEventListener("resize", this.fetchWidth); 
}
  fetchWidth() {
    this.setState({width: window.innerWidth});
    if(window.innerWidth > 670) {
        this.setState({condition: "open"});
    }
    else {
        this.setState({condition: "closed"});
    }
}
  toggleHamburger() {
    if (this.state.condition==="open") {
        this.setState({condition: "closed"});
    }
    else {
      this.setState({condition: "open"});
    }
  }
  componentWillUnmount() {
    window.addEventListener("resize", this.fetchWidth); 
  }
    render() {
        return (
            <div>
                <div className="App-intro">
                    <Header toggleHamburger={this.toggleHamburger} condition={this.state.condition} width={this.state.width}/>
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
export default connect(
    ({ app }) => ({
        width: app.width,
        condition: app.condition
    }),
    dispatch => ({
        updateWidth: (widthDOM) => dispatch(setWidth(widthDOM)),
        updateCondition: (currentCondition) => dispatch(setCondition(currentCondition))
    })
)(App);
