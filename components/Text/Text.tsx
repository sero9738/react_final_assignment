import React, { ReactNode } from "react";
import styles from "./Text.module.css";
import clsx from "clsx";
import { ColorSchema } from "../../types";
import { TextType } from "../../types";

interface TextProps {
  value: string;
  type: TextType;
  colorSchema: ColorSchema;
}

export default function Text({ value, type, colorSchema }: TextProps) {
  if (type === TextType.HEADLINE) {
    return (
      <h2
        className={clsx(
          styles.textHeadline,
          colorSchema === ColorSchema.WHITE ? styles.colorWhite : "",
          colorSchema === ColorSchema.BLACK ? styles.colorBlack : "",
          colorSchema === ColorSchema.BLUE ? styles.colorBlue : ""
        )}
      >
        {value}
      </h2>
    );
  } else {
    return (
      <p
        className={clsx(
          styles.textStandard,
          colorSchema === ColorSchema.WHITE ? styles.colorWhite : "",
          colorSchema === ColorSchema.BLACK ? styles.colorBlack : "",
          colorSchema === ColorSchema.BLUE ? styles.colorBlue : ""
        )}
      >
        {value}
      </p>
    );
  }
}
