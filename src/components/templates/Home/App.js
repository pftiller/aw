import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet} from 'react-helmet';
import {HeaderContents} from './Header';
import {Nav} from './Nav';
import {Carousel} from './Carousel';
import {About} from './About';
import { Books } from './Books';
import { ReviewCycler } from './ReviewCycler';
import {Footer} from './Footer';
import { setWidth, setCondition} from '../../../reducer/api';
import '../../../js/scroll';
import {schemaData} from '../../../js/schema';
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
        window.addEventListener("scroll", this.hasScrolled);
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
    if (this.state.condition==="open" && window.innerWidth < 670) {
        this.setState({condition: "closed"});
    }
    else if (this.state.condition==="open" && window.innerWidth > 670) {
        this.setState({condition: "open"});
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
                <Helmet>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="google-site-verification" content="ORvR-pNXFUg0J07kvJDNZvxtsoymED52IlgYXc6dY7s"/>
                    <noscript>{`
                        <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
                        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/>
                        
                    `}</noscript>
                    <title>{"ArtWrite Productions"}</title>
                    <meta name="description" content={"ArtWrite Productions is a father-son business collaboration aiming to help youth enjoy formal education and gravitate toward self-education by slipping fun into lesson materials and literature."}/>
                    <script type="application/ld+json">{`${schemaData}`}</script>
                </Helmet>
                <div className="App-intro">
                    <header className="header-down">
                        <HeaderContents toggleHamburger={this.toggleHamburger} condition={this.state.condition} width={this.state.width}/>
                        <Nav toggleHamburger={this.toggleHamburger} condition={this.state.condition} width={this.state.width}/>
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
