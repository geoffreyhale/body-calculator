import React from "react";
import ReactDOM from "react-dom";
import BodyCalculator from "./components/BodyCalculator";
import BodyCalculatorPresenter from "./components/BodyCalculator/presenter";

import "./styles.css";

function App() {
  return (
    <BodyCalculator>
      <BodyCalculatorPresenter />
    </BodyCalculator>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
