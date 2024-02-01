import "./input.css";

export default function Weight({ setWeight }) {
  function handleChange(e) {
    setWeight(e);
  }
  return (
    <div id="input-field">
      <span>Weight</span>
      <input
        type="number"
        placeholder="Enter Your Weight in kg"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
