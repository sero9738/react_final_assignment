import React, { useContext } from "react";
import styles from "./Pagination.module.css";
import IconButton from "../IconButton/IconButton";
import Text from "../Text/Text";
import { ValidIcons } from "../../types";
import { ColorSchema } from "../../types";
import { TextType } from "../../types";
import { Room } from "../../types";
import { RoomsContext } from "../../contexts";

interface PaginationProps {
  onChangePage: (value: Room[]) => any;
  initialPage: number;
  pageSize: number;
}

export default function Pagination({
  onChangePage,
  initialPage = 1,
  pageSize = 9,
}: PaginationProps) {
  const [items, setItems] = React.useState<Room[]>(useContext(RoomsContext));
  const [currentPage, setCurrentPage] = React.useState(initialPage);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  React.useEffect(() => {
    setTotalPages(Math.ceil(items.length / pageSize));
  }, [items, pageSize]);

  const getItemsOfCurrentPage = (page: number) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const paginatedItems = items.slice(startIndex, endIndex);
    return paginatedItems;
  };

  const goToPreviousPage = () => {
    handlePageChange(currentPage - 1);
  };

  const goToNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    onChangePage(getItemsOfCurrentPage(page));
  };

  return (
    <div className={styles.container}>
      <IconButton
        icon={ValidIcons.ARROWLEFT}
        colorSchema={ColorSchema.BLUE}
        onClickCallback={goToPreviousPage}
        enabled={currentPage > 1 ? true : false}
      />
      <Text
        value={
          "Page: " +
          currentPage +
          " from " +
          totalPages +
          " : Total Elements " +
          items.length
        }
        type={TextType.TEXT}
        size="MEDIUM"
        colorSchema={ColorSchema.BLACK}
      />
      <IconButton
        icon={ValidIcons.ARROWRIGHT}
        colorSchema={ColorSchema.BLUE}
        onClickCallback={goToNextPage}
        enabled={currentPage < totalPages ? true : false}
      />
    </div>
  );
}
