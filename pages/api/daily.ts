import { NextApiRequest, NextApiResponse } from "next";
import { ObjectID } from "mongodb";

import { connectToDatabase } from "../../util/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const connection = await connectToDatabase();
  if (!connection) {
    throw new Error("Error connecting to database.");
  }
  const db = connection.db;

  if (req.method === "POST") {
    let data = req.body;
    data = JSON.parse(data);
    data.date = new Date(data.date);
    await db
      .collection("daily")
      .updateOne(
        { date: new Date(data.date) },
        { $set: data },
        { upsert: true }
      );

    res.status(200).json({ message: "OK" });
    return;
  }
  const { date } = req.query;
  let currentDate: string | undefined;
  if (typeof date === "string") {
    currentDate = date;
  } else if (typeof date === "undefined") {
    currentDate = undefined;
  } else {
    currentDate = date[0];
  }
  const dataModel = {
    _id: new ObjectID(),
    date: date,
    calories: { label: "Calories", total: 0, target: 0, variant: 0 },
    carbs: { label: "Carbs", total: 0, target: 0, variant: 0 },
    fat: { label: "Fat", total: 0, target: 0, variant: 0 },
    protein: { label: "Protein", total: 0, target: 0, variant: 0 },
  };
  let doc = {};

  if (currentDate) {
    doc = await db.collection("daily").findOne({ date: new Date(currentDate) });
  } else {
    const dateToday = new Date();
    const dateString = `${dateToday.toISOString().slice(0, 10)}T00:00:00.000Z`;
    doc = await db.collection("daily").findOne({ date: new Date(dateString) });
  }
  if (doc == null) {
    doc = dataModel;
  }

  res.status(200).json(doc);
  return;
};
