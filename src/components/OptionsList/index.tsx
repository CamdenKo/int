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
      {options.map((option) => {
        const isSelected = selectedOptions.includes(option);
        console.log(isSelected, selectedOptions);
        return (
          <Option
            option={option}
            selected={selectedOptions.includes(option)}
            onClick={() => {
              if (!isSelected) {
                setSelectedOptions([...selectedOptions, option]);
              } else {
                setSelectedOptions(
                  selectedOptions.filter(
                    (selectedOption) => selectedOption !== option
                  )
                );
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default OptionsList;
