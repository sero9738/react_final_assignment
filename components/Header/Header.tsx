import React from "react";
import styles from "./Header.module.css";
import Text from "../Text/Text";
import { TextType } from "../../types";
import { ColorSchema } from "../../types";

export default function Header({ title }: { title: string }) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Text
          value={title}
          type={TextType.HEADLINE}
          colorSchema={ColorSchema.WHITE}
        />
      </div>
    </header>
  );
}
