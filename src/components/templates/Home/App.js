import React, { Component } from "react";
import { initializeApp } from 'firebase/app';
import { HeaderContents } from "./Header";
import { Carousel } from "./Carousel";
import { About } from "./About";
import { Books } from "./Books";
import { ReviewCycler } from "./ReviewCycler";
import { Footer } from "./Footer";
import "../../../css/styles.css";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
 measurementId : process.env.MEASUREMENT_ID,
 appId : process.env.APP_ID
}

const app = initializeApp(firebaseConfig);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }
  onResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  };
  componentWillUnmount() {
    window.addEventListener("resize", this.onResize);
  }
  render() {
    return (
      <div>
        <div className="App-intro">
          <header className="header-down">
            <HeaderContents width={this.state.width} />
          </header>
          <main>
            <Carousel />
            <About />
            <Books />
            <ReviewCycler />
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}
export default App;
