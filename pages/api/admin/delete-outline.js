import Outline from "models/ouline.model";
import { removeOtulineAccount } from "helper/outline";

export default async function deleteOutlineAccount(req, res) {
  const { id, outlineId } = req.body;
  try {
    const outlineInfo = await removeOtulineAccount(outlineId);
    const newOutline = await Outline.updateOne(
      { _id: id },
      { status: "inactive" },
    )
      .then(() => {
        console.log("status changed");
      })
      .catch(err => {
        console.log(err);
      });

    res.status(200).json({ status: "success" });
  } catch (error) {
    console.error("Error calling API:", error);
  }
}
