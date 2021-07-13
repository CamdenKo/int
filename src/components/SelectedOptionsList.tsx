import React from "react";
import { OptionValue } from "../types";

type Props = {
  selectedOptions: OptionValue[];
};

const SelectedOptionsList: React.FC<Props> = ({ selectedOptions }) => {
  return <div>TODO there are {selectedOptions.length} selected options</div>;
};

export default SelectedOptionsList;
