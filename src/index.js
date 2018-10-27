import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const INCHES_PER_FOOT = 12;

const isNumber = x => !isNaN(x);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heightInches: 0
    };
  }

  getHeightInches() {
    return this.state.heightInches;
  }

  getHeightFeetPart() {
    return Math.floor(this.state.heightInches / INCHES_PER_FOOT);
  }

  getHeightInchesPart() {
    return this.state.heightInches % INCHES_PER_FOOT;
  }

  setHeightInches(inches) {
    this.setState({
      heightInches: inches
    });
  }

  setHeightByFeetPart(feetPart) {
    const feetPartDiff = feetPart - this.getHeightFeetPart();
    const newHeightInches =
      this.state.heightInches + feetPartDiff * INCHES_PER_FOOT;
    this.setState({
      heightInches: newHeightInches
    });
  }

  setHeightByInchesPart(inchesPart) {
    const inchesPartDiff = inchesPart - this.getHeightInchesPart();
    const newHeightInches = this.state.heightInches + inchesPartDiff;
    this.setState({
      heightInches: newHeightInches
    });
  }

  handleChangeHeightInches(e) {
    const inches = e.target.value;
    if (isNumber(inches)) {
      this.setHeightInches(+inches);
    }
  }

  handleChangeHeightInchesPart(e) {
    const inchesPart = e.target.value;
    if (isNumber(inchesPart)) {
      this.setHeightByInchesPart(+inchesPart);
    }
  }

  handleChangeHeightFeetPart(e) {
    const feetPart = e.target.value;
    if (isNumber(feetPart)) {
      this.setHeightByFeetPart(+feetPart);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Body Calculator</h1>
        <h2>Height</h2>
        <div>
          <input
            value={this.getHeightInches()}
            onChange={e => {
              this.handleChangeHeightInches(e);
            }}
            size={5}
          />
          <span> inches</span>
        </div>
        <br />
        <div>
          <input
            value={this.getHeightFeetPart()}
            onChange={e => {
              this.handleChangeHeightFeetPart(e);
            }}
            size={5}
          />
          <span>'</span>
          <input
            value={this.getHeightInchesPart()}
            onChange={e => {
              this.handleChangeHeightInchesPart(e);
            }}
            size={5}
          />
          <span>"</span>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
