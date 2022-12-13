import { type } from "os";
import {
  Room,
  RentableRoom,
  PurchasableRoom,
  AdvertisedRoom,
  User,
} from "../types";
import ApiService from "./ApiService";

export default class CreateService {
  public static post(
    title: string,
    desciption: string,
    imageUrl: string,
    featured: boolean
  ) {
    if (title.length <= 0 || desciption.length <= 0 || imageUrl.length <= 0) {
    }

    const room: RentableRoom = {
      id: 0,
      type: "rentable",
      owner: {
        id: 0,
        firstName: "Susan",
        lastName: "Taylor",
        portraitUrl: "https://i.pravatar.cc/300?img=35",
        starredRooms: [3],
      },
      featured: featured,
      title: title,
      description: desciption,
      heroUrl: imageUrl,
    };
    return ApiService.post("/api/create", room);
  }
}
