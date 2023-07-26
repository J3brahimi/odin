import mongoose from "mongoose";
import db from "../mongoose";

const outlineSchema = new mongoose.Schema({
  createdAt: { type: Date, required: true, default: Date.now },
  expiredAt: {
    type: Date,
    required: [true, "Please tell us expired at date!"],
  },
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  outlineInfo: {
    type: {
      id: String,
      name: String,
      password: String,
      port: Number,
      method: String,
      accessUrl: String,
    },
    required: [false, "Please send outline info!"],
  },
  outlineKey: {
    type: String,
    required: [true, "Please send outline key!"],
  },
  status: {
    type: String,
    required: [true, "Please send outline key!"],
    default: "active",
  },
});

const Outline = db.models.Outline || db.model("Outline", outlineSchema);

export default Outline;
