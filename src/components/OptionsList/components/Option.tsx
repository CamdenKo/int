import React from "react";

import { OptionValue } from "../../../types";

type Props = {
  option: OptionValue;
  onClick: () => void;
  selected: boolean;
};

const Option: React.FC<Props> = ({ option, onClick, selected }) => (
  <div>
    <button onClick={onClick}>toggle</button>
    {selected ? "✅" : "🚫"} {option.label}
  </div>
);

export default Option;
