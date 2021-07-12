import React from "react";
import { useListSelectOptions } from "./hooks";
import { Option } from "./components";
import { OptionValue } from "../../types";

type Props = {
  selectedOptions: OptionValue[];
  setSelectedOptions: (selectedOptions: OptionValue[]) => void;
};

const OptionsList: React.FC<Props> = ({
  selectedOptions,
  setSelectedOptions,
}) => {
  const options = useListSelectOptions();

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
