import React from "react";
import styles from "../styles/Home.module.css";
import Content from "../components/Content/Content";
import RoomComponent from "../components/RoomComponent/RoomComponent";
import Pagination from "../components/Pagination/Pagination";
import Db from "../db";
import { DbData, Room, Route } from "../types";
import { RoomsContext } from "../contexts";

export default function Rooms() {
  const [items, setItems] = React.useState<Room[]>([]);
  const [currentItems, setCurrentItems] = React.useState<Room[]>([]);

  React.useEffect(() => {
    const dbData = Db.read()
      .then((data) => {
        setItems(data.rooms);
        setCurrentItems(data.rooms.slice(0, 9));
      })
      .catch((error) => {
        console.log(error);
      });
  });

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
