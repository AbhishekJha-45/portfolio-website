import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let cachedDb;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  await client.connect();

  const db = client.db("portfolio");
  cachedDb = db;
  console.log("Connected to MongoDB");

  return db;
}

export { connectToDatabase };
