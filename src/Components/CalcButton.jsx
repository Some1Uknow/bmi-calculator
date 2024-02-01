import "./calcButton.css";
import { useState } from "react";
import Result from "./Result";

export default function CalcButton({ height, weight }) {
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const numericHeight = parseFloat(height);
    const numericWeight = parseFloat(weight);

    if (!isNaN(numericHeight) && !isNaN(numericWeight) && numericHeight !== 0) {
      setResult((numericWeight / (numericHeight * numericHeight)).toFixed(2));
    } else {
      setResult("Invalid input");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="btn">
        <button type="submit">Calculate</button>
      </div>
      <Result result={result} />
    </form>
  );
}
