import mongoose from "mongoose";

const uri =
  "mongodb://root:CrqRDFsEW4U5pKIDXyTdIwus@luca.iran.liara.ir:32611/my-app?authSource=admin&replicaSet=rs0&directConnection=true";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default db;
