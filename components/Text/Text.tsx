import React, { ReactNode } from "react";
import styles from "./Text.module.css";
import clsx from "clsx";
import { ColorSchema } from "../../types";
import { TextType } from "../../types";

interface TextProps {
  value: string;
  type: TextType;
  size: string;
  colorSchema: ColorSchema;
}

export default function Text({ value, type, size, colorSchema }: TextProps) {
  if (type === TextType.HEADLINE) {
    return (
      <h2
        className={clsx(
          styles.base,
          styles.textHeadline,
          colorSchema === ColorSchema.WHITE ? styles.colorWhite : "",
          colorSchema === ColorSchema.BLACK ? styles.colorBlack : "",
          colorSchema === ColorSchema.BLUE ? styles.colorBlue : "",
          size === "SMALL" ? styles.sizeSmall : "",
          size === "MEDIUM" ? styles.sizeMedium : "",
          size === "LARGE" ? styles.sizeLarge : ""
        )}
      >
        {value}
      </h2>
    );
  } else {
    return (
      <p
        className={clsx(
          styles.base,
          styles.textStandard,
          colorSchema === ColorSchema.WHITE ? styles.colorWhite : "",
          colorSchema === ColorSchema.BLACK ? styles.colorBlack : "",
          colorSchema === ColorSchema.BLUE ? styles.colorBlue : "",
          size === "SMALL" ? styles.sizeSmall : "",
          size === "MEDIUM" ? styles.sizeMedium : "",
          size === "LARGE" ? styles.sizeLarge : ""
        )}
      >
        {value}
      </p>
    );
  }
}
