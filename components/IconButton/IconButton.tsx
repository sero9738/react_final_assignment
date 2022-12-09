import React from "react";
import styles from "./IconButton.module.css";

import clsx from "clsx";
import { StarIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ColorSchema } from "../../types";
import { ValidIcons } from "../../types";

interface IconButtonProps {
  icon: ValidIcons;
  colorSchema: ColorSchema;
  onClickCallback: () => any;
  enabled: boolean;
}

export default function IconButton({
  icon,
  colorSchema,
  onClickCallback,
  enabled,
}: IconButtonProps) {
  if (icon === "STAR") {
    return (
      <StarIcon
        className={clsx(
          styles.iconButton,
          "h-6",
          "w-6",
          "hover:bg-sky-300",
          colorSchema === ColorSchema.WHITE ? styles.iconColorWhite : "",
          colorSchema === ColorSchema.BLUE ? styles.iconColorBlue : "",
          colorSchema === ColorSchema.BLACK ? styles.iconColorBlack : ""
        )}
        onClick={onClickCallback}
      />
    );
  } else if (icon === "HEART") {
    return (
      <HeartIcon
        className={clsx(
          styles.iconButton,
          "h-6",
          "w-6",
          "hover:bg-sky-300",
          colorSchema === ColorSchema.WHITE ? styles.iconColorWhite : "",
          colorSchema === ColorSchema.BLUE ? styles.iconColorBlue : "",
          colorSchema === ColorSchema.BLACK ? styles.iconColorBlack : ""
        )}
        onClick={onClickCallback}
      />
    );
  } else if (icon === "ARROWLEFT") {
    if (enabled) {
      return (
        <ArrowLeftIcon
          className={clsx(
            styles.iconButton,
            "h-6",
            "w-6",
            "hover:bg-sky-300",
            colorSchema === ColorSchema.WHITE ? styles.iconColorWhite : "",
            colorSchema === ColorSchema.BLUE ? styles.iconColorBlue : "",
            colorSchema === ColorSchema.BLACK ? styles.iconColorBlack : ""
          )}
          onClick={onClickCallback}
        />
      );
    } else {
      return (
        <ArrowLeftIcon
          className={clsx(
            styles.iconButton,
            styles.disabled,
            "h-6",
            "w-6",
            colorSchema === ColorSchema.WHITE ? styles.iconColorWhite : "",
            colorSchema === ColorSchema.BLUE ? styles.iconColorBlue : "",
            colorSchema === ColorSchema.BLACK ? styles.iconColorBlack : ""
          )}
        />
      );
    }
  } else if (icon === "ARROWRIGHT") {
    if (enabled) {
      return (
        <ArrowRightIcon
          className={clsx(
            styles.iconButton,
            "h-6",
            "w-6",
            "hover:bg-sky-300",
            colorSchema === ColorSchema.WHITE ? styles.iconColorWhite : "",
            colorSchema === ColorSchema.BLUE ? styles.iconColorBlue : "",
            colorSchema === ColorSchema.BLACK ? styles.iconColorBlack : ""
          )}
          onClick={onClickCallback}
        />
      );
    } else {
      return (
        <ArrowRightIcon
          className={clsx(
            styles.iconButton,
            styles.disabled,
            "h-6",
            "w-6",
            colorSchema === ColorSchema.WHITE ? styles.iconColorWhite : "",
            colorSchema === ColorSchema.BLUE ? styles.iconColorBlue : "",
            colorSchema === ColorSchema.BLACK ? styles.iconColorBlack : ""
          )}
        />
      );
    }
  } else {
    return (
      <PlusIcon
        className={clsx(
          styles.iconButton,
          "h-6",
          "w-6",
          "hover:bg-sky-300",
          colorSchema === ColorSchema.WHITE ? styles.iconColorWhite : "",
          colorSchema === ColorSchema.BLUE ? styles.iconColorBlue : "",
          colorSchema === ColorSchema.BLACK ? styles.iconColorBlack : ""
        )}
        onClick={onClickCallback}
      />
    );
  }
}
