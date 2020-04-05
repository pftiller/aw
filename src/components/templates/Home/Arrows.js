import React from "react";
import { isWebpSupported } from "react-image-webp/dist/utils";
import { images } from "../../../js/carousel-images";

export class Arrows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index,
    };
    this.forward = this.forward.bind(this);
    this.back = this.back.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (props.time !== state.time) {
      return {
        index: props.index + 1,
      };
    }
    return null;
  }
  componentDidMount() {
    this.timer = null;
    this.timer = setInterval(() => {
      this.forward();
    }, 8000);
  }

  handleClick(e) {
    let className = e.target.className;
    if (className === "left-arrow") {
      this.back();
    } else {
      this.forward();
    }
  }
  back() {
    clearInterval(this.timer);
    let index = this.state.index;
    if (index > 0) {
      index -= 1;
      this.setState({
        index: index,
      });
    } else {
      this.setState({
        index: 2,
      });
    }
    this.timer = setInterval(() => {
      this.forward();
    }, 8000);
  }
  forward() {
    clearInterval(this.timer);
    let index = this.state.index;
    if (index < 2) {
      index += 1;
      this.setState({
        index: index,
      });
    } else {
      this.setState({
        index: 0,
      });
    }
    this.timer = setInterval(() => {
      this.forward();
    }, 8000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    if (isWebpSupported()) {
      return (
        <div className="buttons">
          <img
            src="./images/svgs/left-chevron.svg"
            alt="Left Chevron"
            className="left-arrow"
            onClick={(e) => this.handleClick(e)}
          />
          <img
            src="./images/svgs/right-chevron.svg"
            alt="Right Chevron"
            className="right-arrow"
            onClick={(e) => this.handleClick(e)}
          />
          <div className="slide" style={images[this.state.index].modernStyles}>
            <div className="grey-backdrop">
              <div className="caption">
                <h3>{images[this.state.index].header}</h3>
                <p>{images[this.state.index].caption}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="buttons">
          <img
            src="./images/svgs/left-chevron.svg"
            alt="Left Chevron"
            className="left-arrow"
            onClick={(e) => this.handleClick(e)}
          />
          <img
            src="./images/svgs/right-chevron.svg"
            alt="Right Chevron"
            className="right-arrow"
            onClick={(e) => this.handleClick(e)}
          />
          <div
            className="slide"
            style={images[this.state.index].fallbackStyles}
          >
            <div className="grey-backdrop">
              <div className="caption">
                <h3>{images[this.state.index].header}</h3>
                <p>{images[this.state.index].caption}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
