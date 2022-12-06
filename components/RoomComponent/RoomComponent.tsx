import React from "react";
import styles from "./RoomComponent.module.css";
import Text from "../Text/Text";
import IconButton from "../IconButton/IconButton";
import { Room } from "../../types";
import { RentableRoom } from "../../types";
import { PurchasableRoom } from "../../types";
import { ColorSchema } from "../../types";
import { TextType } from "../../types";
import { ValidIcons } from "../../types";

interface RoomComponentProps {
  room: Room;
  onClickCallback: () => any;
}

export default function RoomComponent({
  room,
  onClickCallback,
}: RoomComponentProps) {
  if (room.type === "rentable") {
    var rentableRoom = room as RentableRoom;
    return (
      <div className={styles.roomComponentContainer}>
        <div className={styles.image}>
          <img src={room.heroUrl} className={styles.center}></img>
        </div>
        <div className={styles.description}>
          <Text
            value={room.title}
            type={TextType.HEADLINE}
            colorSchema={ColorSchema.BLACK}
          />
          <Text
            value={room.description}
            type={TextType.TEXT}
            colorSchema={ColorSchema.BLACK}
          />
        </div>
        <div className={styles.owner}>
          <div className={styles.userImage}>
            <img src={rentableRoom.owner.portraitUrl} />
          </div>
          <Text
            value={
              rentableRoom.owner.firstName + " " + rentableRoom.owner.lastName
            }
            type={TextType.TEXT}
            colorSchema={ColorSchema.BLACK}
          />
          <IconButton
            icon={ValidIcons.STAR}
            colorSchema={ColorSchema.BLUE}
            onClickCallback={() => onClickCallback}
          />
        </div>
      </div>
    );
  } else {
    var purchasbleRoom = room as PurchasableRoom;

    return (
      <div className={styles.roomComponentContainer}>
        <div className={styles.image}>
          <img src={room.heroUrl} className={styles.center}></img>
        </div>
        <div className={styles.description}>
          <Text
            value={room.title}
            type={TextType.HEADLINE}
            colorSchema={ColorSchema.BLUE}
          />
          <Text
            value={room.description}
            type={TextType.TEXT}
            colorSchema={ColorSchema.BLACK}
          />
        </div>
        <div className={styles.price}>
          <Text
            value={
              "Buy at " +
              purchasbleRoom.price.amount +
              " " +
              purchasbleRoom.price.currency
            }
            type={TextType.TEXT}
            colorSchema={ColorSchema.BLUE}
          />
        </div>
      </div>
    );
  }
}
