import { ObjectId } from "mongodb";

type Data = {
  _id: ObjectId;
  date: string;
  calories: Macros;
  carbs: Macros;
  fat: Macros;
  protein: Macros;
};

type MacroNames = "calories" | "carbs" | "fat" | "protein";

type MacroNumbers = "total" | "target" | "variant";

type Macros = Record<MacroNumbers, number>;
