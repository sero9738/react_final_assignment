import React from "react";
import styles from "./RoomComponent.module.css";
import Text from "../Text/Text";
import IconButton from "../IconButton/IconButton";
import { useTranslations } from "next-intl";
import {
  Room,
  RentableRoom,
  PurchasableRoom,
  AdvertisedRoom,
} from "../../types";
import { ColorSchema, TextType, ValidIcons } from "../../types";

interface RoomComponentProps {
  room: Room;
  onClickCallback: () => any;
}

export default function RoomComponent({
  room,
  onClickCallback,
}: RoomComponentProps) {
  const t = useTranslations("RoomComponent");

  if (room.type === "rentable") {
    var rentableRoom = room as RentableRoom;

    return (
      <div className={styles.roomComponentContainer}>
        {rentableRoom.featured ? (
          <div className={styles.featuredLabel + " " + styles.floatingLabel}>
            <Text
              value={t("featuredLabel")}
              type={TextType.HEADLINE}
              size="SMALL"
              colorSchema={ColorSchema.BLUE}
            />
          </div>
        ) : (
          ""
        )}
        <div className={styles.image}>
          <img src={room.heroUrl} className={styles.center}></img>
        </div>
        <div className={styles.description}>
          <Text
            value={room.title}
            type={TextType.HEADLINE}
            size="MEDIUM"
            colorSchema={ColorSchema.BLACK}
          />
          <Text
            value={room.description}
            type={TextType.TEXT}
            size="MEDIUM"
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
            size="MEDIUM"
            colorSchema={ColorSchema.BLACK}
          />
          <IconButton
            icon={ValidIcons.STAR}
            colorSchema={ColorSchema.BLUE}
            onClickCallback={onClickCallback}
            enabled={true}
          />
        </div>
      </div>
    );
  } else if (room.type === "advertised") {
    var advertisedRoom = room as AdvertisedRoom;

    return (
      <div className={styles.roomComponentContainer}>
        <div className={styles.advertisedLabel + " " + styles.floatingLabel}>
          <Text
            value={t("adLabel")}
            type={TextType.HEADLINE}
            size="SMALL"
            colorSchema={ColorSchema.WHITE}
          />
        </div>
        <div className={styles.image}>
          <img src={room.heroUrl} className={styles.center}></img>
        </div>
        <div className={styles.description + " " + styles.advertised}>
          <Text
            value={room.title}
            type={TextType.HEADLINE}
            size="MEDIUM"
            colorSchema={ColorSchema.WHITE}
          />
          <Text
            value={room.description}
            type={TextType.TEXT}
            size="MEDIUM"
            colorSchema={ColorSchema.WHITE}
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
            size="MEDIUM"
            colorSchema={ColorSchema.BLUE}
          />
          <Text
            value={room.description}
            type={TextType.TEXT}
            size="MEDIUM"
            colorSchema={ColorSchema.BLACK}
          />
        </div>
        <div className={styles.price}>
          <Text
            value={
              t("purchaseText") +
              purchasbleRoom.price.amount +
              " " +
              purchasbleRoom.price.currency
            }
            type={TextType.TEXT}
            size="MEDIUM"
            colorSchema={ColorSchema.BLUE}
          />
        </div>
      </div>
    );
  }
}
