import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Content from "../components/Content/Content";
import RoomComponent from "../components/RoomComponent/RoomComponent";
import Pagination from "../components/Pagination/Pagination";
import Db from "../staticDb";
import { Route } from "../types";
import { Room } from "../types";
import { RoomsContext } from "../contexts";

export default function Home() {
  const [route, setRoute] = React.useState(Route.LIST);
  const [items, setItems] = React.useState<Room[]>(Db.rooms);
  const [currentItems, setCurrentItems] = React.useState<Room[]>(
    Db.rooms.slice(0, 9)
  );

  function onButtonClicked() {
    alert("Button clicked!");
  }

  function onPaginationPageChanged(value: Room[]) {
    setCurrentItems(value);
  }

  return (
    <RoomsContext.Provider value={Db.rooms}>
      <div>
        <Header title="Arrrbnb">
          <Navigation
            currentRoute={route}
            setRouteCallback={setRoute}
          ></Navigation>
        </Header>
        <Content>
          {route === Route.LIST ? (
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
          ) : (
            <p>Create form</p>
          )}
        </Content>
      </div>
    </RoomsContext.Provider>
  );
}
