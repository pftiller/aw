import React from "react";
import { Nav } from "./Nav";
const hamburgerStates = require("../../../js/hamburger-states");
export class HeaderContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleHamburger = this.toggleHamburger.bind(this);
    this.closeNavigation = this.closeNavigation.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (props.width !== state.width) {
      if (props.condition === "closed" && props.width < 1200) {
        return {
          width: props.width,
          condition: "closed",
        };
      } else if (props.condition === "open" && props.width < 1200) {
        return {
          width: props.width,
          condition: "open",
        };
      } else {
        return {
          width: props.width,
          condition: "open",
        };
      }
    }
    return null;
  }

  toggleHamburger() {
    if (this.state.width < 1200) {
      if (this.state.condition === "closed") {
        this.setState({
          condition: "open",
        });
      } else {
        this.setState({
          condition: "closed",
        });
      }
    }
  }
  closeNavigation() {
    this.setState({
      condition: "closed",
    });
  }
  render() {

    if (this.state.width < 1200 && this.state.condition === "open") {
      return (
        <div>
          <picture>
            <source srcSet="/images/artwrite-logo.webp" type="image/webp" />
            <img
              src="/images/artwrite-logo.png"
              className="logo"
              alt="ArtWrite Productions Logo"
            />
          </picture>
          <img
            src={hamburgerStates.open.src}
            className={hamburgerStates.open.className}
            alt={hamburgerStates.open.alt}
            onClick={() => this.toggleHamburger()}
          />
          <Nav condition={this.state.condition} />
        </div>
      );
    } else if (this.state.width < 1200 && this.state.condition === "closed") {
      return (
        <div>
          <picture>
            <source srcSet="/images/artwrite-logo.webp" type="image/webp" />
            <img
              src="/images/artwrite-logo.png"
              className="logo"
              alt="ArtWrite Productions Logo"
            />
          </picture>
          <img
            src={hamburgerStates.closed.src}
            className={hamburgerStates.closed.className}
            alt={hamburgerStates.closed.alt}
            onClick={() => this.toggleHamburger()}
          />
          <Nav condition={this.state.condition} />
        </div>
      );
    } else {
      return (
        <div>
          <picture>
            <source srcSet="/images/artwrite-logo.webp" type="image/webp" />
            <img
              src="/images/artwrite-logo.png"
              className="logo"
              alt="ArtWrite Productions Logo"
            />
          </picture>
          <Nav condition={this.state.condition} />
        </div>
      );
    }
  }
}
