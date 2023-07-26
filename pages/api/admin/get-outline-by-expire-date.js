import Outline from "models/ouline.model";

import moment from "moment";

export default async function outlineList(req, res) {
  const { expiredAt } = req.body;
  const startDate = moment(expiredAt).set({ hour: 0, minute: 0, second: 0 });
  const endDate = moment(expiredAt).set({ hour: 23, minute: 59, second: 59 });
  try {
    const outlineUsers = await Outline.find({
      expiredAt: {
        $gte: new Date(startDate),
        $lt: new Date(endDate),
      },
    });
    res.status(200).json(outlineUsers);
  } catch (error) {
    console.error("Error calling API:", error);
  }
}
