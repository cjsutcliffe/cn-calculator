import "./App.css";
import { useState } from "react";
import { evaluate } from "mathjs";
import Buttons from "./components/Buttons";
import Maths from "./components/Maths";

const App = () => {
  // calcultor state
  const [input, setInput] = useState("");
  // function to calculate result
  const calculate = (aButton) => {
    if (aButton === "=") {
      const result = evaluate(input);
      setInput(result);
    } else if (aButton === "c") {
      setInput("");
    } else setInput(input + aButton);
  };
  // handle click
  const handleClick = (e) => {
    const display = e.target.textContent;
    calculate(display);
  };

  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        Calculator
      
      </div>
      {/* Body */}
      <div className="content">
        <div className="calculator">
          {/* <h1>Calculator</h1> */}
          <div className="calcBody">
            <h1 className="display">
              {input}
            </h1>
            <div className="calc-box">
              <div className="numbers">
                <Buttons handleClick={handleClick} />
              </div>

              <Maths handleClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        Chris Sutcliffe <></>
        <a onclick href="https://github.com/cjsutcliffe/cn-calculator">GitHub</a>
      </div>
      {/* End of App div */}
    </div>
  );
};

export default App;