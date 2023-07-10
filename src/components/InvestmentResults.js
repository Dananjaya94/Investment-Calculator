import React from "react";
import classes from "./InvestmentResults.module.css";

const Formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function InvestmentResults(props) {
  return (
    // Todo: Show below table conditionally (only once result data is available)
    //   Show fallback text if no data is available

    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((dataItem) => (
          <tr key={dataItem.year}>
            <td>{dataItem.year}</td>
            <td>{dataItem.savingsEndOfYear}</td>
            <td>{dataItem.yearlyInterest}</td>
            <td>
              {Formatter.format(
                dataItem.savingsEndOfYear -
                  props.initialInvestment -
                  dataItem.yearlyContribution * dataItem.year
              )}
            </td>
            <td>
              {Formatter.format(
                props.initialInvestment +
                  dataItem.yearlyContribution * dataItem.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
