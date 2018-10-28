import React from "react";

const INCHES_PER_FOOT = 12;
const CENTIMETERS_PER_INCH = 2.54;

export default class BodyCalculator extends React.Component {
  constructor() {
    super();

    this.state = {
      heightInches: 0,
      isRounding: true
    };

    this.getIsRounding = this.getIsRounding.bind(this);
    this.getHeightInches = this.getHeightInches.bind(this);
    this.getHeightFeetPart = this.getHeightFeetPart.bind(this);
    this.getHeightInchesPart = this.getHeightInchesPart.bind(this);
    this.getHeightCentimeters = this.getHeightCentimeters.bind(this);
    this.setHeightInches = this.setHeightInches.bind(this);
    this.setHeightByFeetPart = this.setHeightByFeetPart.bind(this);
    this.setHeightByInchesPart = this.setHeightByInchesPart.bind(this);
    this.setHeightByCentimeters = this.setHeightByCentimeters.bind(this);
    this.setIsRounding = this.setIsRounding.bind(this);
  }

  getHeightInches() {
    const inches = this.state.heightInches;
    return this.state.isRounding ? Math.round(inches) : inches;
  }

  getHeightFeetPart() {
    const feetPart = Math.floor(this.state.heightInches / INCHES_PER_FOOT);
    return feetPart;
  }

  getHeightInchesPart() {
    const inchesPart = this.state.heightInches % INCHES_PER_FOOT;
    return this.state.isRounding ? Math.round(inchesPart) : inchesPart;
  }

  getHeightCentimeters() {
    const centimeters = this.state.heightInches * CENTIMETERS_PER_INCH;
    return this.state.isRounding ? Math.round(centimeters) : centimeters;
  }

  getIsRounding() {
    return this.state.isRounding;
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

  setHeightByCentimeters(centimeters) {
    this.setState({
      heightInches: centimeters / CENTIMETERS_PER_INCH
    });
  }

  setIsRounding(isRounding) {
    // for preferred user experience
    // before exiting rounding, round inches
    // when exiting rounding, inches stay same, centimeters may reveal decimal part, not vice versa
    // effectively, inches appear to be the stable source of truth
    if (!isRounding) {
      this.setState({
        heightInches: Math.round(this.state.heightInches)
      });
    }

    this.setState({
      isRounding: isRounding
    });
  }

  render() {
    const { children } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        getHeightInches: this.getHeightInches,
        getHeightFeetPart: this.getHeightFeetPart,
        getHeightInchesPart: this.getHeightInchesPart,
        getHeightCentimeters: this.getHeightCentimeters,
        getIsRounding: this.getIsRounding,
        setHeightInches: this.setHeightInches,
        setHeightByFeetPart: this.setHeightByFeetPart,
        setHeightByInchesPart: this.setHeightByInchesPart,
        setHeightByCentimeters: this.setHeightByCentimeters,
        setIsRounding: this.setIsRounding
      })
    );

    return <div>{childrenWithProps}</div>;
  }
}
