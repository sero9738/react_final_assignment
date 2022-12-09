import React, { useRef } from "react";
import styles from "./CreateRoomForm.module.css";
import InputField from "../InputField/InputField";
import Text from "../Text/Text";
import { ColorSchema } from "../../types";
import { TextType } from "../../types";

export default function CreateRoomForm() {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const imageUrlInputRef = useRef<HTMLInputElement>(null);

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    if (titleInputRef.current != null && descriptionInputRef.current != null && imageUrlInputRef.current != null) {
        //Create new room
    }

    resetForm();
  }

  function resetForm() {
    if (titleInputRef.current != null && descriptionInputRef.current != null && imageUrlInputRef.current != null) {
      titleInputRef.current.value = "";
      descriptionInputRef.current.value = "";
      imageUrlInputRef.current.value = "";
      titleInputRef.current.focus();
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(event) => onSubmit(event)}>
        <div className={styles.itemRow}>
          <Text
            value="Add rentable cabin"
            type={TextType.HEADLINE}
            size="LARGE"
            colorSchema={ColorSchema.BLACK}
          />
        </div>

        <div className={styles.itemRow}>
          <InputField inputRef={titleInputRef} label="Title" />
          <InputField inputRef={descriptionInputRef} label="Description" />
        </div>
        <div className={styles.itemRow}>
          <InputField inputRef={imageUrlInputRef} label="Hero image URL" />
        </div>
        <div className={styles.itemRow}>
          <button type="submit" className={styles.submitButton}>
            Add cabin
          </button>
        </div>
      </form>
    </div>
  );
}
