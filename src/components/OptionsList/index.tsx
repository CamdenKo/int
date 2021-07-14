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
        return (
          <Option
            option={option}
            selected={selectedOptions.includes(option)}
            onClick={() =>
              setSelectedOptions((currentSelectedOptions) => {
                if (
                  currentSelectedOptions.some(
                    ({ value: { id, type } }) =>
                      id === option.value.id && type === option.value.type
                  )
                ) {
                  return currentSelectedOptions.filter(
                    ({ value: { id, type } }) =>
                      id !== option.value.id || type !== option.value.type
                  );
                }
                return [...selectedOptions, option];
              })
            }
          />
        );
      })}
    </div>
  );
};

export default OptionsList;
