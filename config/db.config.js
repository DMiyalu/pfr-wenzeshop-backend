// mongodb+srv://client:bravoure0804@cluster0.tfe0w.mongodb.net/Wenzeshop?retryWrites=true&w=majority

const MongoClient = require('mongoose').MongoClient;
const uri = "mongodb+srv://client:bravoure0804@cluster0.tfe0w.mongodb.net/Wenzeshop?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Wenzeshop").collection("devices");
  // perform actions on the collection object
  client.close();
});