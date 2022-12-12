import React from "react";
import styles from "../styles/Home.module.css";
import Content from "../components/Content/Content";
import RoomComponent from "../components/RoomComponent/RoomComponent";
import Pagination from "../components/Pagination/Pagination";
import Db from "../db";
import { DbData, Room, Route, User } from "../types";
import { RoomsContext } from "../contexts";

export async function getServerSideProps() {
  const data = await Db.read();
  return {
    props: {
      sessionUser: data.sessionUser,
      rooms: data.rooms
    }
  }
}

interface RoomsProps {
  sessionUser: User;
  rooms: Room[];
}

export default function Rooms({sessionUser, rooms}: RoomsProps) {
  const [items, setItems] = React.useState<Room[]>(rooms);
  const [currentItems, setCurrentItems] = React.useState<Room[]>(rooms.slice(0, 9));

  function onButtonClicked() {
    alert("Button clicked!");
  }

  function onPaginationPageChanged(value: Room[]) {
    setCurrentItems(value);
  }

  if (items != undefined && currentItems != undefined) {
    return (
      <RoomsContext.Provider value={items}>
        <div>
          <Content>
            <div>
              <div className={styles.roomsContainer}>
                {currentItems.map((room) => (
                  <RoomComponent
                    room={room}
                    onClickCallback={onButtonClicked}
                  />
                ))}
              </div>
              <Pagination
                onChangePage={onPaginationPageChanged}
                initialPage={1}
                pageSize={9}
              />
            </div>
          </Content>
        </div>
      </RoomsContext.Provider>
    );
  } else {
    return <div>Loading...</div>;
  }
}
