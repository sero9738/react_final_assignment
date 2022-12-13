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
    res.json({ error: "method was not post." });
    return;
  }

  if (
    typeof req.body.description !== "string" ||
    req.body.description.length === 0
  ) {
    res.status(StatusCodes.BAD_REQUEST);
    res.json({ error: "body.description was wrong." });
    return;
  }

  if (typeof req.body.title !== "string" || req.body.title.length === 0) {
    res.status(StatusCodes.BAD_REQUEST);
    res.json({ error: "body.title was wrong." });
    return;
  }

  if (typeof req.body.heroUrl !== "string" || req.body.heroUrl.length === 0) {
    res.status(StatusCodes.BAD_REQUEST);
    res.json({ error: "body.heroUrl was wrong." });
    return;
  }

  const data = await Db.read();

  if (data == undefined) {
    res.status(StatusCodes.FAILED_DEPENDENCY);
    res.json({ error: "Db.read failed." });
    return;
  }

  const room: RentableRoom = {
    id: data.rooms.length + 1,
    type: "rentable",
    owner: req.body.owner,
    featured: req.body.featured,
    title: req.body.title,
    description: req.body.description,
    heroUrl: req.body.heroUrl,
  };
  data.rooms.unshift(room);

  await Db.write();

  res.status(StatusCodes.CREATED);
  res.json(room);
}
