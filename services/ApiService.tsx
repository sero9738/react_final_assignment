import HttpError from "./HttpError";
import { Room } from "../types";

export default class ApiService {
  public static post(url: string, room: Room) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(room)
    }).then((response) => {
      if (!response.ok) {
        throw new HttpError(response.status);
      }

      return response.json();
    });
  }
}
