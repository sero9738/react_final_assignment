import { NextApiRequest, NextApiResponse } from "next";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import Db from "../../db";
import {
  Room,
  RentableRoom,
  PurchasableRoom,
  AdvertisedRoom,
} from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(StatusCodes.BAD_REQUEST);
    res.json({ error: ReasonPhrases.BAD_REQUEST });
    return;
  }

  if (typeof req.body.message !== "string" || req.body.message.length === 0) {
    res.status(StatusCodes.BAD_REQUEST);
    res.json({ error: ReasonPhrases.BAD_REQUEST });
    return;
  }

  const data = await Db.read();
  const room: AdvertisedRoom = {
    id: data.rooms.length,
    type: "advertised",
    title: req.body.title,
    description: req.body.description,
    heroUrl: req.body.heroUrl
  };
  data.rooms.unshift(room);

  await Db.write();

  res.status(StatusCodes.CREATED);
  res.json(room);
}
