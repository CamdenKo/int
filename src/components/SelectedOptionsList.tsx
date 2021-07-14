import React from "react";
import { AlertRuleType, AlertRuleTypeDisplayText, OptionValue } from "../types";

type Props = {
  selectedOptions: OptionValue[];
};

const SelectedOptionsList: React.FC<Props> = ({ selectedOptions }) => {
  const selectedOptionsMapping: any = {};

  for (const option of selectedOptions) {
    if (!selectedOptionsMapping[option.value.type]) {
      selectedOptionsMapping[option.value.type] = [];
    }

    selectedOptionsMapping[option.value.type].push(option);
  }

  return (
    <>
      {Object.entries(selectedOptionsMapping).map(
        ([alertRuleType, optionValues]) => (
          <div key={alertRuleType}>
            <h1>{AlertRuleTypeDisplayText[alertRuleType as AlertRuleType]}</h1>
            <ul>
              {(optionValues as any).map((optionValue: any) => (
                <li key={optionValue.label}>{optionValue.label}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </>
  );
};

export default SelectedOptionsList;
