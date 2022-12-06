import React from "react";
import styles from "./IconButton.module.css";

import clsx from "clsx";
import { StarIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ColorSchema } from "../../types";
import { ValidIcons } from "../../types";

interface IconButtonProps {
  icon: ValidIcons;
  colorSchema: ColorSchema;
  onClickCallback: () => any;
}

export default function IconButton({
  icon,
  colorSchema,
  onClickCallback,
}: IconButtonProps) {
  if (icon === "STAR") {
    return (
      <div className={styles.iconButton} onClick={() => onClickCallback}>
        <StarIcon
          className={clsx(
            "h-6",
            "w-6",
            "hover:bg-sky-300",
            colorSchema === ColorSchema.WHITE ? styles.iconColorWhite : "",
            colorSchema === ColorSchema.BLUE ? styles.iconColorBlue : "",
            colorSchema === ColorSchema.BLACK ? styles.iconColorBlack : ""
          )}
        />
      </div>
    );
  } else if (icon === "HEART") {
    return (
      <div className={styles.iconButton} onClick={() => onClickCallback}>
        <HeartIcon
          className={clsx(
            "h-6",
            "w-6",
            "hover:bg-sky-300",
            colorSchema === ColorSchema.WHITE ? styles.iconColorWhite : "",
            colorSchema === ColorSchema.BLUE ? styles.iconColorBlue : "",
            colorSchema === ColorSchema.BLACK ? styles.iconColorBlack : ""
          )}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.iconButton} onClick={() => onClickCallback}>
        <PlusIcon
          className={clsx(
            "h-6",
            "w-6",
            "hover:bg-sky-300",
            colorSchema === ColorSchema.WHITE ? styles.iconColorWhite : "",
            colorSchema === ColorSchema.BLUE ? styles.iconColorBlue : "",
            colorSchema === ColorSchema.BLACK ? styles.iconColorBlack : ""
          )}
        />
      </div>
    );
  }
}
