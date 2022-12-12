import { type } from "os";
import { Room, RentableRoom, PurchasableRoom, AdvertisedRoom, User } from "../types";
import ApiService from "./ApiService";

export default class CreateService {
    public static post(title: string, desciption: string, imageUrl: string, featured: boolean){
        const room: AdvertisedRoom = {
            id: 0,
            type: "advertised",
            title: title,
            description: desciption,
            heroUrl: imageUrl
        } 
        return ApiService.post("/api/create", room);
    }
}