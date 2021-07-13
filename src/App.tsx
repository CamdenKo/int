import React from "react";
import { useState } from "react";
import "./App.css";
import { OptionValue } from "./types";

import { OptionsList, SelectedOptionsList } from "./components";
import { submitData } from "./utils";
import { useListSelectOptions } from "./components/OptionsList/hooks";

function App() {
  const [minimumTransactionAmount, setMinimumTransactionAmount] = useState(500);
  const [selectedOptions, setSelectedOptions] = useState<OptionValue[]>([]);

  const options = useListSelectOptions();

  return (
    <div className="App">
      <h1>Ramp</h1>
      <h2>alerts</h2>
      <div>
        <p>Minimum Transaction Amount:</p>
        $
        <input
          value={minimumTransactionAmount}
          onChange={(e) => {
            setMinimumTransactionAmount(Number(e.target.value));
          }}
        />
      </div>
      <div>
        <p>Selected:</p>
        <SelectedOptionsList selectedOptions={selectedOptions} />
      </div>
      <div>
        <p>Selection Options:</p>
        <OptionsList
          selectedOptions={selectedOptions}
          options={options}
          setSelectedOptions={setSelectedOptions}
        />
      </div>
      <br />
      <button
        style={{ fontSize: "30px" }}
        onClick={() => {
          submitData(); // TODO
        }}
      >
        submit
      </button>
    </div>
  );
}

export default App;
