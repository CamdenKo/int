import React from "react";
import { useState } from "react";
import "./App.css";
import { AlertRule, AlertRuleTypeToAlerRuleIdName, OptionValue } from "./types";

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
          onChange={(event) => {
            setMinimumTransactionAmount(Number(event.target.value));
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
          const alertRules: AlertRule[] = selectedOptions.map((option) => ({
            type: option.value.type,
            [AlertRuleTypeToAlerRuleIdName[option.value.type]]: option.value.id,
          }));

          submitData({
            transaction_amount_threshold: minimumTransactionAmount,
            alert_rules: alertRules, 
          });
        }}
      >
        submit
      </button>
    </div>
  );
}

export default App;
