import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Header} from './Header';
import {Carousel} from './Carousel';
import {About} from './About';
import { Books } from './Books';
import { ReviewCycler } from './ReviewCycler';
import {Footer} from './Footer';
import { setWidth, setCondition } from '../../../reducer/api';
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
            this.props.updateWidth(window.innerWidth);
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
        let green = '/images/green.png';
        let orange = './images/orange.png';
        let pink = '/images/pink.png';
        let purple = './images/purple.png';
        let carousel;
        let about;
        let books;
        let reviews;
        if(window.devicePixelRatio > 1) {
             carousel = {
                background: `url(${green}) bottom / 107% calc(155% - ${this.props.width}px) no-repeat`
            }
             about = {
                background: `url(${orange}) center center / 100% calc(140% - ${this.props.width}px) no-repeat`
            }
             books = {
                background: `url(${pink}) center center / 100% calc(125% - ${this.props.width}px) no-repeat`
            }    
             reviews = {
                background: `url(${purple}) center center / 105% calc(150% - ${this.props.width}px) no-repeat`   
            }
        }
        else {
             carousel = {
                background: `url(${green}) bottom / 107% calc(165% - ${this.props.width}px) no-repeat`
            }
             about = {
                background: `url(${orange}) center center / 100% calc(155% - ${this.props.width}px) no-repeat`
            }
             books = {
                background: `url(${pink}) center center / 100% calc(135% - ${this.props.width}px) no-repeat`
            }    
             reviews = {
                background: `url(${purple}) center center / 105% calc(155% - ${this.props.width}px) no-repeat`   
            }
        }
        return (
            <div>
                <div className="App-intro">
                    <Header toggleHamburger={this.toggleHamburger} condition={this.state.condition} width={this.state.width}/>
                    <main>
                        <Carousel style={carousel}/>
                        <About style={about}/>
                        <Books style={books}/>
                        <ReviewCycler style={reviews}/>
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
        updateCondition: (currentCondition) => dispatch(setCondition(currentCondition)),
    })
)(App);
