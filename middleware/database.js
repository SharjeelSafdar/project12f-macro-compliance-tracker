import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient(
  `mongodb+srv://admin:${process.env.MONGODB_USER_PASSWORD}@cluster0.xxb5b.mongodb.net/test`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("MCT");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
