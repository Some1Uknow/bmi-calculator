import React, { useState } from "react";
import "./result.css";

export default function Result({ result }) {
  const [isCalculated, setIsCalculated] = useState(false);

  if (result !== 0 && !isCalculated) {
    setIsCalculated(true);
  }

  return (
    <>
      {isCalculated && (
        <div>
          <p>{result}</p>
          <span id="res">
            {result > 25
              ? "You might be overweight"
              : "You are fine"}
          </span>
        </div>
      )}
    </>
  );
}
