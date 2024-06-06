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
        <Result
          initialInvestment={+initialInvestment}
          expectedReturn={+expectedReturn}
          annualInvestment={+annualInvestment}
          duration={+duration}
        />
      </div>
    </>
  );
}

export default App;
