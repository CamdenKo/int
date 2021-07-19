import React from "react";
import { useState } from "react";
import "./App.css";
import { OptionValue } from "./types";

import { OptionsList, SelectedOptionsList } from "./components";
import { submitData } from "./utils-DO-NOT-EDIT";
import { useListSelectOptions } from "./components/OptionsList/hooks";

function App() {
  const [minimumTransactionAmount, setMinimumTransactionAmount] = useState(500);
  const [selectedOptions, setSelectedOptions] = useState<OptionValue[]>([]);

  const options = useListSelectOptions();

  return (
    <div className="App">
      <h1>Ramp</h1>
      <h2>Alerts</h2>
      <div>
        <p>Minimum Transaction Amount:</p>
        $
        <input
          value={minimumTransactionAmount}
          type="number"
          onChange={() => {
            // TODO
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
          submitData({
            transaction_amount_threshold: -1, // TODO
            alert_rules: [], // TODO
          });
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
