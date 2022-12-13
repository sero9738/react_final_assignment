import clsx from "clsx";
import { createContext } from "react";
import { Room, User } from "./types";

export const RoomsContext = createContext<Room[]>([]);
export const SessionUserContext = createContext<User | undefined>(undefined);
