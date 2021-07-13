import React from "react";

import { OptionValue } from "../../../types";

type Props = {
  option: OptionValue;
  onClick: () => void;
  selected: boolean;
};

const Option: React.FC<Props> = ({ option, onClick, selected }) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div>
      <button onClick={onClick}>toggle</button>
      {selected ? "✅" : "🚫"}
    </div>
    {option.label}
  </div>
);

export default Option;
