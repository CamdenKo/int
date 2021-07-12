import React from "react";
import { useState } from "react";
import "./App.css";
import { OptionValue } from "./types";

import { OptionsList } from "./components";
import { submitData } from "./utils";

function App() {
  const [minimumTransactionAmount, setMinimumTransactionAmount] = useState(500);
  const [selectedOptions, setSelectedOptions] = useState<OptionValue[]>([]); // TODO

  return (
    <div className="App">
      <h1>Ramp</h1>
      <h2>alerts</h2>
      <div>
        <p>Minimum Transaction Amount:</p>
        $
        <input
          value={minimumTransactionAmount}
          onChange={() => {
            // TODO
          }}
        />
      </div>
      <div>
        <p>Selected:</p>
        TODO
      </div>
      <div>
        <p>Selection Options:</p>
        <OptionsList
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </div>
      <br />
      <button
        style={{ fontSize: "30px" }}
        onClick={() => {
          // TODO use submitData
        }}
      >
        submit
      </button>
    </div>
  );
}

export default App;
