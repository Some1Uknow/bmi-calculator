import Weight from "./Components/Weight";
import Height from "./Components/Height";
import Heading from "./Components/Heading";
import CalcButton from "./Components/calcButton";
import ReloadButton from "./Components/ReloadButton"; 
import { useState } from "react";
import "./form.css";

export default function Form() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleHeightChange = (e) => {
    setHeight(parseFloat(e.target.value));
  };

  const handleWeightChange = (e) => {
    setWeight(parseFloat(e.target.value));
  };

  return (
    <div id="main">
      <Heading />
      <Weight weight={weight} setWeight={handleWeightChange} />
      <Height height={height} setHeight={handleHeightChange} />
      <CalcButton height={height} weight={weight} />
      <ReloadButton /> 
    </div>
  );
}
