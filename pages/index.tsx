import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import RoomComponent from "../components/RoomComponent/RoomComponent";
import Db from "../staticDb";

export default function Home() {
  var rooms = Db.rooms;

  function onButtonClicked() {
    alert("Button clicked!");
  }

  return (
    <div className="App">
      <Header title="Arrrbnb"></Header>
      <Content>
        {rooms.map((room) => (
          <RoomComponent room={room} onClickCallback={onButtonClicked} />
        ))}
      </Content>
    </div>
  )
}
