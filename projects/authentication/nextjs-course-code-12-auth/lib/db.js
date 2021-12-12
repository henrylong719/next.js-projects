import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://henrylong7199:13806315432@cluster0.ety0r.mongodb.net/next-auth?retryWrites=true&w=majority`
  );

  return client;
}
