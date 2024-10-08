import { MongoClient } from "mongodb";

async function handler(req, res) {
  console.log("INSIDE", req.body);
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    const client = await MongoClient.connect(
      "mongodb+srv://ronaldthomas094db:irzAh9W5WriXKXN1@ronaldmongocluster.0ronf.mongodb.net/meetups?retryWrites=true&w=majority&appName=ronaldmongocluster"
    );

    const db = client.db();

    const meetupsCollections = db.collection("meetups");

    console.log("HERE");
    const result = await meetupsCollections.insertOne(data);
    console.log("result", result);

    console.log("Mongo Db result", result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
