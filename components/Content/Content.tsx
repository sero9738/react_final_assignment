import React, { ReactNode } from "react";
import styles from "./Content.module.css";

export default function Content({ children }: { children: ReactNode }) {
  return (
      <div className={styles.contentContainer}>{children}</div>
    ); 
}