import React, { FC } from "react";
import { Data, MacroNumbers } from "../next-env";

interface MCTFormProps {
  data: Data;
  item: MacroNumbers;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const MCTForm: FC<MCTFormProps> = ({ data, item, onChange }) => {
  return (
    <div className="w-1/3">
      <h2 className="text-3xl p-4">{item}</h2>
      <div className="p-4">
        <label className="block">Calories</label>
        <input
          type="number"
          name={item + " calories"}
          value={data.calories[item]}
          onChange={onChange}
          className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className="p-4">
        <label className="block">Carbs</label>
        <input
          type="number"
          name={item + " carbs"}
          value={data.carbs[item]}
          onChange={onChange}
          className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className="p-4">
        <label className="block">Fat</label>
        <input
          type="number"
          name={item + " fat"}
          value={data.fat[item]}
          onChange={onChange}
          className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className="p-4">
        <label className="block">Protein</label>
        <input
          type="number"
          name={item + " protein"}
          value={data.protein[item]}
          onChange={onChange}
          className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
    </div>
  );
};

export default MCTForm;
