import "./input.css";

export default function Height({ setHeight }) {
  function handleChange(e) {
    setHeight(e);
  }
  return (
    <div id="input-field">
      <span>Height</span>
      <input
        type="number"
        placeholder="Enter your height in metres"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
