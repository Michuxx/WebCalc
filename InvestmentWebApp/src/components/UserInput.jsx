export default function UserInput({
  setInitialInvestment,
  setExpectedReturn,
  setAnnualInvestment,
  setDuration,
  initialInvestment,
  expectedReturn,
  annualInvestment,
  duration,
}) {
  return (
    <>
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(e) => setInitialInvestment(e)}
            value={initialInvestment}
          />
        </div>
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(e) => setExpectedReturn(e)}
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
            onChange={(e) => setAnnualInvestment(e)}
            value={annualInvestment}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(e) => setDuration(e)}
            value={duration}
          />
        </div>
      </div>
    </>
  );
}
