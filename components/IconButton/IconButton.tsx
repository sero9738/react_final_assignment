import React from "react";
import styles from "./IconButton.module.css";

import clsx from "clsx";
//import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ColorSchema } from "../../types";
import { ValidIcons } from "../../types";

interface IconButtonProps {
  name: string;
  icon: ValidIcons;
  colorSchema: ColorSchema;
  onClickCallback: () => any;
  enabled: boolean;
}

export default function IconButton({
  name,
  icon,
  colorSchema,
  onClickCallback,
  enabled,
}: IconButtonProps) {
  if (icon === "STAR") {
    return (
      <button name={name} aria-label={name} onClick={onClickCallback} disabled={!enabled}>
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
        />
      </button>
    );
  } else if (icon === "HEART") {
    return (
      <button name={name} aria-label={name} onClick={onClickCallback} disabled={!enabled}>
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
        />
      </button>
    );
  } else if (icon === "ARROWLEFT") {
    return (
      <button
        name={name}
        aria-label={name}
        onClick={onClickCallback}
        disabled={!enabled}
      >
        <ArrowLeftIcon
          className={clsx(
            styles.iconButton,
            !enabled ? styles.disabled : "",
            "h-6",
            "w-6",
            colorSchema === ColorSchema.WHITE ? styles.iconColorWhite : "",
            colorSchema === ColorSchema.BLUE ? styles.iconColorBlue : "",
            colorSchema === ColorSchema.BLACK ? styles.iconColorBlack : ""
          )}
        />
      </button>
    );
  } else if (icon === "ARROWRIGHT") {
    return (
      <button
        name={name}
        aria-label={name}
        onClick={onClickCallback}
        disabled={!enabled}
      >
        <ArrowRightIcon
          className={clsx(
            styles.iconButton,
            !enabled ? styles.disabled : "",
            "h-6",
            "w-6",
            colorSchema === ColorSchema.WHITE ? styles.iconColorWhite : "",
            colorSchema === ColorSchema.BLUE ? styles.iconColorBlue : "",
            colorSchema === ColorSchema.BLACK ? styles.iconColorBlack : ""
          )}
        />
      </button>
    );
  } else {
    return (
      <button name={name} aria-label={name} onClick={onClickCallback}>
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
        />
      </button>
    );
  }
}
