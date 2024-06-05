import { useState } from "react";

export default function UserInput() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [expectedReturn, SetExpectedReturn] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleInitialInvestmentChange = (event) => {
    setInitialInvestment(event.target.value);
  };
  const handleReturnChange = (event) => {
    SetExpectedReturn(event.target.value);
  };
  const handleAnnualInvestmentChange = (event) => {
    setAnnualInvestment(event.target.value);
  };
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <>
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={handleInitialInvestmentChange}
            value={initialInvestment}
          />
        </div>
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={handleReturnChange}
            value={expectedReturn}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={handleAnnualInvestmentChange}
            value={annualInvestment}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={handleDurationChange}
            value={duration}
          />
        </div>
      </div>
    </>
  );
}
