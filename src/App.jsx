import React from "react";

const App = () => {
  return (
    <div class="container">
      <div class="result" id="display">
        <p id="result-box">0</p>
      </div>

      <div class="buttons">
        <div class="button action-btn" id="clear">
          AC
        </div>
        <div class="button action-btn" id="">
          MC
        </div>
        <div class="button num-button action-btn" id="">
          {" "}
          %
        </div>
        <div class="button num-button calc-action-btn" id="divide">
          {" "}
          /
        </div>
        <div class="button num-button seven" id="seven">
          7
        </div>
        <div class="button num-button eight" id="eight">
          8
        </div>
        <div class="button num-button nine" id="nine">
          9
        </div>
        <div class="button num-button calc-action-btn" id="multiply">
          *
        </div>
        <div class="button num-button four" id="four">
          4
        </div>
        <div class="button num-button five" id="five">
          5
        </div>
        <div class="button num-button six" id="six">
          6
        </div>
        <div class="button num-button calc-action-btn" id="substrack">
          -
        </div>
        <div class="button num-button one" id="one">
          1
        </div>
        <div class="button num-button two" id="two">
          2
        </div>
        <div class="button num-button three" id="three">
          3
        </div>
        <div class="button num-button calc-action-btn" id="add">
          +
        </div>
        <div class="button num-button zero" id="zero">
          0
        </div>
        <div class="button num-button point" id="decimal">
          .
        </div>
        <div class="button calc-action-btn" id="equals">
          =
        </div>
      </div>
    </div>
  );
};

export default App;
