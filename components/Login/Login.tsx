import React, { useContext } from "react";
import styles from "./Login.module.css";
import Text from "../Text/Text";
import { useTranslations } from "next-intl";
import { User, ColorSchema, TextType, ValidIcons } from "../../types";
import { SessionUserContext } from "../../contexts";

export default function Login() {
  const t = useTranslations("Login");
  const sessionUser: User | undefined = useContext(SessionUserContext);

  if (sessionUser != undefined) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.userImage}>
          <img src={sessionUser.portraitUrl} alt={t("userImageAlt")} />
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
