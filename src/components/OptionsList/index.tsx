import React from "react";
import { Option } from "./components";
import { OptionValue } from "../../types";

type Props = {
  options: OptionValue[];
  selectedOptions: OptionValue[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<OptionValue[]>>;
};

const OptionsList: React.FC<Props> = ({
  selectedOptions,
  setSelectedOptions,
  options,
}) => {
  return (
    <div
      style={{
        width: "1000px",
        margin: "0 auto",
      }}
    >
      {options.map((option) => (
        <Option
          option={option}
          selected={selectedOptions.includes(option)}
          onClick={() => console.log("todo")}
        />
      ))}
    </div>
  );
};

export default OptionsList;
