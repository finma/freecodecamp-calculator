/* eslint-disable no-eval */
import React, { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState("0");

  const handleClear = () => {
    setDisplay("0");
  };

  const handleButton = (btn) => {
    if (display === "0") {
      setDisplay(btn);
    } else {
      if (btn === "." && display[display.length - 1] === ".") {
        return;
      } else {
        setDisplay(display.concat(btn));
      }
    }
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const handleResult = () => {
    setDisplay(String(eval(display)));
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="result" id="display">
          <p id="result-box">{display}</p>
        </div>

        <div className="buttons">
          <div className="button action-btn" id="clear" onClick={handleClear}>
            <p>AC</p>
          </div>
          <div className="button action-btn" id="" onClick={handleBackspace}>
            <p>DEL</p>
          </div>
          <div className="button num-button action-btn" id="">
            <p>%</p>
          </div>
          <div
            className="button num-button calc-action-btn"
            id="divide"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>/</p>
          </div>
          <div
            className="button num-button seven"
            id="seven"
            value="7"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>7</p>
          </div>
          <div
            className="button num-button eight"
            id="eight"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>8</p>
          </div>
          <div
            className="button num-button nine"
            id="nine"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>9</p>
          </div>
          <div
            className="button num-button calc-action-btn"
            id="multiply"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>*</p>
          </div>
          <div
            className="button num-button four"
            id="four"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>4</p>
          </div>
          <div
            className="button num-button five"
            id="five"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>5</p>
          </div>
          <div
            className="button num-button six"
            id="six"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>6</p>
          </div>
          <div
            className="button num-button calc-action-btn"
            id="subtract"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>-</p>
          </div>
          <div
            className="button num-button one"
            id="one"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>1</p>
          </div>
          <div
            className="button num-button two"
            id="two"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>2</p>
          </div>
          <div
            className="button num-button three"
            id="three"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>3</p>
          </div>
          <div
            className="button num-button calc-action-btn"
            id="add"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>+</p>
          </div>
          <div
            className="button num-button zero"
            id="zero"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>0</p>
          </div>
          <div
            className="button num-button point"
            id="decimal"
            onClick={(e) => handleButton(e.target.innerText)}
          >
            <p>.</p>
          </div>
          <div
            className="button calc-action-btn"
            id="equals"
            onClick={handleResult}
          >
            <p> =</p>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/finma"
        target="_blank"
        rel="noreferrer"
        className="bg-gray-100 mt-4 github"
      >
        <img src="/github.png" alt="github" />
      </a>
    </div>
  );
};

export default App;
