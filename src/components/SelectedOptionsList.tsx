import React from "react";
import { AlertRuleType, OptionValue } from "../types";

import FilteredOptionsList from "./FilteredOptionsList";

type Props = {
  selectedOptions: OptionValue[];
};

const SelectedOptionsList: React.FC<Props> = ({ selectedOptions }) => {
  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <FilteredOptionsList
        title="Departments"
        options={selectedOptions.filter(
          ({ value: { type } }) => type === AlertRuleType.DEPARTMENT
        )}
      />
      <FilteredOptionsList
        title="Merchant"
        options={selectedOptions.filter(
          ({ value: { type } }) => type === AlertRuleType.MERCHANT
        )}
      />
      <FilteredOptionsList
        title="Category"
        options={selectedOptions.filter(
          ({ value: { type } }) => type === AlertRuleType.SK_CATEGORY
        )}
      />
    </div>
  );
};

export default SelectedOptionsList;
