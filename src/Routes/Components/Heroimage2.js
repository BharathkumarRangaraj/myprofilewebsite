import { Component } from "react";
import "./Heroimage2style.css";

class Heroimage2 extends Component {
  render() {
    return (
      <div className="hero-image">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.para}</p>
        </div>
      </div>
    );
  }
}

export default Heroimage2;
