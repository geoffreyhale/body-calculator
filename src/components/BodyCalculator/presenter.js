import React from "react";

const isNumber = x => !isNaN(x);

export default class BodyCalculatorPresenter extends React.Component {
  handleChangeHeightInches(e) {
    const inches = e.target.value;
    if (isNumber(inches)) {
      this.props.setHeightInches(+inches);
    }
  }

  handleChangeHeightInchesPart(e) {
    const inchesPart = e.target.value;
    if (isNumber(inchesPart)) {
      this.props.setHeightByInchesPart(+inchesPart);
    }
  }

  handleChangeHeightFeetPart(e) {
    const feetPart = e.target.value;
    if (isNumber(feetPart)) {
      this.props.setHeightByFeetPart(+feetPart);
    }
  }

  handleChangeHeightCentimeters(e) {
    const centimeters = e.target.value;
    if (isNumber(centimeters)) {
      this.props.setHeightByCentimeters(+centimeters);
    }
  }

  handleChangeRound(e) {
    const isChecked = e.target.checked;
    this.props.setIsRounding(isChecked);
  }

  render() {
    const {
      getIsRounding,
      getHeightInches,
      getHeightCentimeters,
      getHeightFeetPart,
      getHeightInchesPart
    } = this.props;

    return (
      <div className="App">
        <h1>Body Calculator</h1>
        <h2>Height</h2>
        <div>
          <input
            type="checkbox"
            checked={getIsRounding()}
            onChange={e => this.handleChangeRound(e)}
          />{" "}
          Round
        </div>
        <table style={{ display: "inline-table" }}>
          <tbody>
            <tr>
              <td>
                <input
                  value={getHeightInches()}
                  onChange={e => {
                    this.handleChangeHeightInches(e);
                  }}
                  size={5}
                />
                <span> inches</span>
              </td>
              <td>
                <input
                  value={getHeightCentimeters()}
                  onChange={e => {
                    this.handleChangeHeightCentimeters(e);
                  }}
                  size={7}
                />
                <span> cm</span>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  value={getHeightFeetPart()}
                  onChange={e => {
                    this.handleChangeHeightFeetPart(e);
                  }}
                  size={3}
                />
                <span>' </span>
                <input
                  value={getHeightInchesPart()}
                  onChange={e => {
                    this.handleChangeHeightInchesPart(e);
                  }}
                  size={5}
                />
                <span>"</span>
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
