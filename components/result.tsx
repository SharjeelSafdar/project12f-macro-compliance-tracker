import React, { FC, useState, useEffect } from "react";

import { Macros, MacroNames } from "../next-env";

interface ResultProps {
  results: Macros;
  label: MacroNames;
}

const Result: FC<ResultProps> = ({ results, label }) => {
  const [bg, setBg] = useState("");

  useEffect(() => {
    setBackground();
  });

  const setBackground = () => {
    const min = +results.target - +results.variant;
    const max = +results.target + +results.variant;

    if (+results.total >= min && +results.total <= max) {
      setBg("bg-green-500");
    } else if (+results.total < min) {
      setBg("bg-blue-500");
    } else {
      setBg("bg-red-500");
    }
  };

  return (
    <div className={bg + " w-1/4 p-4 text-white"}>
      <h2 className="text-3xl font-bold">
        {results.total}
        <div className="flex text-sm p-4">
          <div className="w-1/3">{+results.target - +results.variant}</div>
          <div className="w-1/3 font-bold">{+results.target}</div>
          <div className="w-1/3">{+results.target + +results.variant}</div>
        </div>
      </h2>
      <h3 className="text-xl">{label[0].toUpperCase() + label.slice(1)}</h3>
    </div>
  );
};

export default Result;
