import { calculateInvestmentResults, formatter } from "../investment.js";

export default function Result({
  initialInvestment,
  expectedReturn,
  annualInvestment,
  duration,
}) {
  const resultData = calculateInvestmentResults(
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  );

  const initialInvestments =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  console.log(resultData);
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>
              <p>Year</p>
            </th>
            <th>
              <p>Investment Value</p>
            </th>
            <th>
              <p>Interest(Year)</p>
            </th>
            <th>
              <p>Total Interest</p>
            </th>
            <th>
              <p>Invested Capital</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((records) => {
            const totalInterest =
              records.valueEndOfYear -
              records.annualInvestment * records.year -
              initialInvestments;

            const totalAmountInvested = records.valueEndOfYear - totalInterest;
            return (
              <tr key={records.year}>
                <td>{records.year}</td>
                <td>{formatter.format(records.valueEndOfYear)}</td>
                <td>{formatter.format(records.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
