import { PurchasableRoom, Room, RentableRoom, User, DbData } from "./types";

const users: Array<User> = [
  {
    id: 0,
    firstName: "Susan",
    lastName: "Taylor",
    portraitUrl: "https://i.pravatar.cc/300?img=35",
    starredRooms: [0, 4]
  },
  {
    id: 1,
    firstName: "Jane",
    lastName: "Wilson",
    portraitUrl: "https://i.pravatar.cc/300?img=21",
    starredRooms: []
  },
  {
    id: 2,
    firstName: "Jack",
    lastName: "Anderson",
    portraitUrl: "https://i.pravatar.cc/300?img=13",
    starredRooms: []
  },
  {
    id: 3,
    firstName: "Jamie",
    lastName: "Reynolds",
    portraitUrl: "https://i.pravatar.cc/300?img=30",
    starredRooms: []
  },
  {
    id: 4,
    firstName: "Ryan",
    lastName: "Taylor",
    portraitUrl: "https://i.pravatar.cc/300?img=7",
    starredRooms: []
  }
];

const rentables: Array<Omit<RentableRoom, "id">> = [
  {
    owner: users[1],
    type: "rentable",
    title: "Cozy cabin on large boat",
    description:
      "Two double cabins with private bathroom and shower for exclusive use.",
    heroUrl:
      "https://c.pxhere.com/photos/5f/c8/galleon_ship_moored_sail_vessel_nautical_transportation_boat-553557.jpg!d"
  },
  {
    featured: true,
    owner: users[3],
    type: "rentable",
    title: 'Shared "room" on small boat',
    description: "Small boat, big heart. A great opportunity to meet people.",
    heroUrl:
      "https://c.pxhere.com/photos/f4/3e/boat_pier_docked_dock_water_sea_nature_summer-875419.jpg!d"
  },
  {
    owner: users[2],
    type: "rentable",
    title: "Private, cozy room on large sailing boat",
    description:
      "Experience your own custom sailing excursion for up to 6 people to stunning secluded beaches.",
    heroUrl:
      "https://c.pxhere.com/photos/83/4b/ship_tall_frigate_historic_uss_constitution_old_ironsides_vessel_american-1330097.jpg!d"
  },
  {
    featured: true,
    owner: users[4],
    type: "rentable",
    title: "Classic vessel with private cabin",
    description:
      "Wake up to another city every day and enjoy some time on the sea.",
    heroUrl:
      "https://c.pxhere.com/photos/7e/ee/sailing_boat_mastes_rigging_boat_sail_sea_ship_yacht-680903.jpg!d"
  }
];

const purchasables: Array<Omit<PurchasableRoom, "id">> = [
  {
    title: "Large boat for sale",
    type: "purchasable",
    description: "Great for spending time on the sea.",
    heroUrl: rentables[0].heroUrl,
    price: {
      amount: 1900000,
      currency: "USD"
    }
  }
];

const rooms: Array<Room> = Array.from({ length: 20 }).map((value, index) => {
  if (index > 0 && index % 5 === 0) {
    return {
      id: index,
      ...purchasables[index % purchasables.length]
    };
  } else {
    return {
      id: index,
      ...rentables[index % rentables.length]
    };
  }
});

const db: DbData = {
  sessionUser: users[0],
  rooms
};

export default db;
