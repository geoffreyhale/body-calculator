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

  handleChangeWeightPounds(e) {
    const pounds = e.target.value;
    if (isNumber(pounds)) {
      this.props.setWeightByPounds(+pounds);
    }
  }

  handleChangeWeightKilograms(e) {
    const kilograms = e.target.value;
    if (isNumber(kilograms)) {
      this.props.setWeightByKilograms(+kilograms);
    }
  }

  render() {
    const {
      getIsRounding,
      getHeightInches,
      getHeightCentimeters,
      getHeightFeetPart,
      getHeightInchesPart,
      getWeightPounds,
      getWeightKilograms,
      getBMI
    } = this.props;

    return (
      <div className="App">
        <h1>Body Calculator</h1>
        <div>
          <input
            type="checkbox"
            checked={getIsRounding()}
            onChange={e => this.handleChangeRound(e)}
          />{" "}
          Round
        </div>

        <h2>Height</h2>
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

        <h2>Weight</h2>
        <table style={{ display: "inline-table" }}>
          <tbody>
            <tr>
              <td>
                <input
                  value={getWeightPounds()}
                  onChange={e => {
                    this.handleChangeWeightPounds(e);
                  }}
                  size={5}
                />
                <span> lbs</span>
              </td>
              <td>
                <input
                  value={getWeightKilograms()}
                  onChange={e => {
                    this.handleChangeWeightKilograms(e);
                  }}
                  size={5}
                />
                <span> kg</span>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>BMI</h2>
        <p>
          Body Mass Index (BMI) is a person’s weight in kilograms divided by the
          square of height in meters.
        </p>
        <input
          value={getBMI()}
          // onChange={e => {
          //   this.handleChangeWeightKilograms(e);
          // }}
          disabled
          size={5}
        />
        <span> kg/m^2</span>
      </div>
    );
  }
}
