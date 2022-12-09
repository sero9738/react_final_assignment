export type Id = number;

export enum ColorSchema {
  WHITE = "WHITE",
  BLACK = "BLACK",
  BLUE = "BLUE",
}

export enum TextType {
  TEXT = "TEXT",
  HEADLINE = "HEADLINE",
}

export enum ValidIcons {
  STAR = "STAR",
  HEART = "HEART",
  PLUS = "PLUS",
  ARROWLEFT = "ARROWLEFT",
  ARROWRIGHT = "ARROWRIGHT"
}

export enum Route {
  CREATE = "CREATE",
  LIST = "LIST",
}

export type User = {
  id: Id;
  firstName: string;
  lastName: string;
  portraitUrl: string;
  starredRooms: Array<Id>;
};

export type SessionUser = User & {
  starredRooms: Array<Id>;
};

export type RentableRoom = {
  id: Id;
  type: "rentable";
  owner: User;
  featured?: boolean;
  title: string;
  description: string;
  heroUrl: string;
};

export type PurchasableRoom = {
  id: Id;
  type: "purchasable";
  title: string;
  description: string;
  heroUrl: string;
  price: {
    amount: number;
    currency: string;
  };
};

export type AdvertisedRoom = {
  id: Id;
  type: "advertised";
  title: string;
  description: string;
  heroUrl: string;
};

export type Room = RentableRoom | PurchasableRoom | AdvertisedRoom;

export type DbData = {
  sessionUser: User;
  rooms: Array<Room>;
};

export type CollectionPage = {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
};

export type Collection<Node> = {
  page: CollectionPage;
  nodes: Array<Node>;
};