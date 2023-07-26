import Outline from "models/ouline.model";
import {
  creatNewOutlineAccessKey,
  modifyOtulineAccountDataLimit,
} from "helper/outline";
import moment from "moment";

export default async function addTest(req, res) {
  const { month } = req.body;
  const oneMonthDataLimit = 50000000000; // 50G
  const accountDataLimit = oneMonthDataLimit * month;
  console.log("accountDataLimit: ", accountDataLimit);
  try {
    const outlineInfo = await creatNewOutlineAccessKey();
    const dataLimit = await modifyOtulineAccountDataLimit(
      outlineInfo.id,
      accountDataLimit,
    );
    const expiredAt = moment().add(month, "months");
    const newOutline = await Outline.create({
      name: "Odin",
      outlineInfo,
      outlineKey: outlineInfo.accessKey,
      expiredAt,
    });
    res.status(200).json(newOutline);
  } catch (error) {
    console.error("Error calling API:", error);
  }
}
