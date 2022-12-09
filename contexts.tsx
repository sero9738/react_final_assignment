import clsx from "clsx";
import { createContext } from "react";
import { Room } from "./types";

export const RoomsContext = createContext<Room[]>([]);