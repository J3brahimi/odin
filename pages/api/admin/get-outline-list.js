import Outline from "models/ouline.model";
import {
  creatNewOutlineAccessKey,
  modifyOtulineAccountDataLimit,
} from "helper/outline";
import moment from "moment";

export default async function outlineList(req, res) {
  try {
    const outlineUsers = await Outline.find();
    res.status(200).json(outlineUsers);
  } catch (error) {
    console.error("Error calling API:", error);
  }
}
