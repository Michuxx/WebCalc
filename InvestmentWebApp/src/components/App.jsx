import "../CSS/index.css";
import photo from "/investment-calculator-logo.png";
import UserInput from "./UserInput";
import Result from "./Result";

function App() {
  return (
    <>
      <div id="header">
        <img src={photo} alt="Inv" />
        <h1>Investment Calculator</h1>
      </div>
      <div id="user-input">
        <UserInput />
      </div>
      <div id="result">
        <Result />
      </div>
    </>
  );
}

export default App;
