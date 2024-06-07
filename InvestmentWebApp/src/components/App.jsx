import "../CSS/index.css";
import photo from "/investment-calculator-logo.png";
import UserInput from "./UserInput";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [duration, setDuration] = useState(10);

  const handleInitialInvestmentChange = (event) => {
    setInitialInvestment(event.target.value);
  };
  const handleReturnChange = (event) => {
    setExpectedReturn(event.target.value);
  };
  const handleAnnualInvestmentChange = (event) => {
    setAnnualInvestment(event.target.value);
  };
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  let inputIsValid = "you cant choose negative input's data";

  if (
    initialInvestment >= 0 &&
    expectedReturn >= 0 &&
    annualInvestment >= 0 &&
    duration > 0
  ) {
    inputIsValid = (
      <Result
        initialInvestment={+initialInvestment}
        expectedReturn={+expectedReturn}
        annualInvestment={+annualInvestment}
        duration={+duration}
      />
    );
  }

  return (
    <>
      <div id="header">
        <img src={photo} alt="Inv" />
        <h1>Investment Calculator</h1>
      </div>
      <div id="user-input">
        <UserInput
          setInitialInvestment={handleInitialInvestmentChange}
          setExpectedReturn={handleReturnChange}
          setAnnualInvestment={handleAnnualInvestmentChange}
          setDuration={handleDurationChange}
          initialInvestment={+initialInvestment}
          expectedReturn={+expectedReturn}
          annualInvestment={+annualInvestment}
          duration={+duration}
        />
      </div>
      <div id="result">
        <p className="center">{inputIsValid}</p>
      </div>
    </>
  );
}

export default App;
