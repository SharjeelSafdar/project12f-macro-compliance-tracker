import { Db, MongoClient } from "mongodb";

let cached: {
  client: MongoClient;
  db: Db;
} | null = null;

export async function connectToDatabase() {
  const { MONGODB_URI, MONGODB_DB } = process.env;

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (!MONGODB_DB) {
    throw new Error(
      "Please define the MONGODB_DB environment variable inside .env.local"
    );
  }
  if (cached) {
    return cached;
  }

  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  cached = await MongoClient.connect(MONGODB_URI, opts).then(client => {
    return {
      client,
      db: client.db(MONGODB_DB),
    };
  });

  return cached;
}
