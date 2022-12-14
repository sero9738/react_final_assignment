import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Content from "../components/Content/Content";
import RoomComponent from "../components/RoomComponent/RoomComponent";
import Pagination from "../components/Pagination/Pagination";
import Login from "../components/Login/Login";
import Db from "../db";
import Head from "next/head";
import { Collection, CollectionPage, Room, User } from "../types";
import { RoomsContext, SessionUserContext } from "../contexts";
import { NumberParam } from "serialize-query-params";

export async function getServerSideProps(context: {
  query: { page: string | (string | null)[] | null | undefined };
}) {
  const data = await Db.read();
  return {
    props: {
      sessionUser: data.sessionUser,
      rooms: paginate(
        data.rooms,
        NumberParam.decode(context.query.page) || 1,
        9
      ),
      collection: createCollection(
        data.rooms,
        9,
        NumberParam.decode(context.query.page) || 1
      ),
      messages: (await import(`../messages/en.json`)).default,
    },
  };
}

function paginate(itemsSet: Room[], page: number, pageSize: number) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const paginatedItems = itemsSet.slice(startIndex, endIndex);
  return paginatedItems;
}

function createCollection(nodes: Array<Room>, size: number, number: number) {
  const page: CollectionPage = {
    size: size,
    totalElements: nodes.length,
    totalPages: Math.ceil(nodes.length / size),
    number: number,
  };

  const collection: Collection<Room> = {
    page: page,
    nodes: nodes,
  };
  return collection;
}

interface RoomsProps {
  sessionUser: User;
  rooms: Room[];
  collection: Collection<Room>;
}

export default function Rooms({ sessionUser, rooms, collection }: RoomsProps) {
  const [sessionUserState, setSessionUserState] = useState<User>(sessionUser);

  function onButtonClicked(room: Room) {
    if (sessionUser != undefined) {
      debugger;
      if (sessionUser.starredRooms.includes(room.id)) {
        return;
      }

      const newSessionUser: User = {
        id: sessionUserState.id,
        firstName: sessionUserState.firstName,
        lastName: sessionUserState.lastName,
        portraitUrl: sessionUserState.portraitUrl,
        starredRooms: sessionUserState.starredRooms,
      };
      newSessionUser.starredRooms.unshift(room.id);
      setSessionUserState(newSessionUser);
    } else {
      alert("No current sessionUser.");
    }
  }

  if (rooms != undefined && rooms != undefined) {
    return (
      <SessionUserContext.Provider value={sessionUserState}>
        <RoomsContext.Provider value={rooms}>
          <Head>
            <title>Room Rentals - Rooms</title>
          </Head>
          <div>
            <Login />
            <Content>
              <div>
                <div className={styles.roomsContainer}>
                  {rooms.map((room) => (
                    <RoomComponent
                      key={room.id}
                      room={room}
                      onClickCallback={onButtonClicked}
                    />
                  ))}
                </div>
                <Pagination collection={collection} />
              </div>
            </Content>
          </div>
        </RoomsContext.Provider>
      </SessionUserContext.Provider>
    );
  } else {
    return <div>Loading...</div>;
  }
}
