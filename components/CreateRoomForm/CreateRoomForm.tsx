import React, { useRef, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import styles from "./CreateRoomForm.module.css";
import InputField from "../InputField/InputField";
import Text from "../Text/Text";
import { ColorSchema } from "../../types";
import { TextType } from "../../types";
import HttpError from "../../services/HttpError";
import CreateService from "../../services/CreatService";
import usePromised from "use-promised";

export default function CreateRoomForm() {
  const t = useTranslations("CreateRoomForm");
  const router = useRouter();
  const [submitPromise, setSubmitPromise] = usePromised<void, HttpError>();

  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const imageUrlInputRef = useRef<HTMLInputElement>(null);

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const input = {
      title: formData.get("Title") as string,
      desciption: formData.get("Description") as string,
      image: formData.get("Hero image URL") as string,
    };

    debugger;

    const promise = CreateService.post(
      input.title,
      input.desciption,
      input.image,
      false
    )
      .then(() => router.push("/rooms"))
      .then(() => form.reset());

    setSubmitPromise(promise);
  }

  function resetForm() {
    if (
      titleInputRef.current != null &&
      descriptionInputRef.current != null &&
      imageUrlInputRef.current != null
    ) {
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
            value={t("title")}
            type={TextType.HEADLINE}
            size="LARGE"
            colorSchema={ColorSchema.BLACK}
          />
        </div>

        <div className={styles.itemRow}>
          <InputField inputRef={titleInputRef} label={t("titleInputField")} />
          <InputField
            inputRef={descriptionInputRef}
            label={t("descriptionInputField")}
          />
        </div>
        <div className={styles.itemRow}>
          <InputField
            inputRef={imageUrlInputRef}
            label={t("imageUrlInputField")}
          />
        </div>
        <div className={styles.itemRow}>
          <button type="submit" className={styles.submitButton}>
            {t("submitButton")}
          </button>
        </div>
      </form>
    </div>
  );
}
