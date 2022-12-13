import React, { useContext } from "react";
import styles from "./Login.module.css";
import Text from "../Text/Text";
import { useTranslations } from "next-intl";
import { User, ColorSchema, TextType, ValidIcons } from "../../types";
import { setEmitFlags } from "typescript";
import { SessionUserContext } from "../../pages/_app";

interface UserProps {
  sessionUser?: User | undefined;
}

export default function Login() {
  const t = useTranslations("User");

  //const sessionUser: User | undefined = useContext(SessionUserContext);
  const sessionUser: User = {
    id: 0,
    firstName: "Susan",
    lastName: "Taylor",
    portraitUrl: "https://i.pravatar.cc/300?img=35",
    starredRooms: [3],
  };

  if (sessionUser != undefined) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.userImage}>
          <img src={sessionUser.portraitUrl} />
        </div>
        <div className={styles.userInformation}>
          <Text
            value={sessionUser.firstName + " " + sessionUser.lastName}
            type={TextType.HEADLINE}
            size="SMALL"
            colorSchema={ColorSchema.WHITE}
          />
          <Text
            value={
              sessionUser.starredRooms != undefined &&
              sessionUser.starredRooms.length > 0
                ? sessionUser.starredRooms.length + t("starredInfo")
                : t("unvalidInfo")
            }
            type={TextType.TEXT}
            size="SMALL"
            colorSchema={ColorSchema.WHITE}
          />
        </div>
      </div>
    );
  } else {
    return <div className={styles.loginContainer}></div>;
  }
}
