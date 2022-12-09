import React, { ReactNode } from "react";
import styles from "./Header.module.css";
import Text from "../Text/Text";
import { TextType } from "../../types";
import { ColorSchema } from "../../types";

export default function Header({ children, title }: { children: ReactNode, title: string }) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Text
          value={title}
          type={TextType.HEADLINE}
          size="MEDIUM"
          colorSchema={ColorSchema.WHITE}
        />
      </div>
      <div className={styles.children}>
        {children}
      </div>
    </header>
  );
}
