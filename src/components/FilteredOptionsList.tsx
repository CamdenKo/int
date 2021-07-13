import React from "react";
import { OptionValue } from "../types";

type Props = {
  title: string;
  options: OptionValue[];
};

const FilteredOptionsList: React.FC<Props> = ({ options, title }) => {
  if (!options.length) {
    return null;
  }
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {options.map(({ label }) => (
          <li>{label}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredOptionsList;
