import React, { useContext } from "react";
import { useRouter } from "next/router";
import styles from "./Pagination.module.css";
import IconButton from "../IconButton/IconButton";
import Text from "../Text/Text";
import { Collection, CollectionPage, ValidIcons } from "../../types";
import { ColorSchema } from "../../types";
import { TextType } from "../../types";
import { Room } from "../../types";
import { RoomsContext } from "../../contexts";
import { NodeNextRequest } from "next/dist/server/base-http/node";

interface PaginationProps {
  collection: Collection<Room>;
}

export default function Pagination({ collection }: PaginationProps) {
  const router = useRouter();

  function goToPreviousPage() {
    router.push("/rooms?page=" + (collection.page.number - 1));
  }

  function goToNextPage() {
    router.push("/rooms?page=" + (collection.page.number + 1));
  }

  if (collection == undefined) {
    return (
      <div className={styles.container}>
      <IconButton
        icon={ValidIcons.ARROWLEFT}
        colorSchema={ColorSchema.BLUE}
        onClickCallback={goToPreviousPage}
        enabled={false}
      />
      <Text
        value="Loading"
        type={TextType.TEXT}
        size="MEDIUM"
        colorSchema={ColorSchema.BLACK}
      />
      <IconButton
        icon={ValidIcons.ARROWRIGHT}
        colorSchema={ColorSchema.BLUE}
        onClickCallback={goToNextPage}
        enabled={false}
      />
    </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <IconButton
          icon={ValidIcons.ARROWLEFT}
          colorSchema={ColorSchema.BLUE}
          onClickCallback={goToPreviousPage}
          enabled={collection.page.number > 1 ? true : false}
        />
        <Text
          value={
            "Page: " +
            collection.page.number +
            " from " +
            collection.page.totalPages +
            " : Total Elements " +
            collection.page.totalElements
          }
          type={TextType.TEXT}
          size="MEDIUM"
          colorSchema={ColorSchema.BLACK}
        />
        <IconButton
          icon={ValidIcons.ARROWRIGHT}
          colorSchema={ColorSchema.BLUE}
          onClickCallback={goToNextPage}
          enabled={
            collection.page.number < collection.page.totalPages ? true : false
          }
        />
      </div>
    );
  }
}
