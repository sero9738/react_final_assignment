import React, { useRef, FormEvent, useState } from "react";
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
  const [showWrongImagePatternMessage, setShowWrongImagePatternMessage] =
    useState<boolean>(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const checkboxElement = form.querySelector(
      `input[name="${t("featuredCheckboxLabel")}"]`
    ) as HTMLInputElement;
    const featured = checkboxElement ? checkboxElement.checked : false;

    const input = {
      title: formData.get("Title") as string,
      desciption: formData.get("Description") as string,
      image: formData.get("Hero image Url") as string,
      featured: featured,
    };

    debugger;

    const regex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    const match = regex.exec(input.image);
    if (match == undefined || match.length <= 0) {
      setShowWrongImagePatternMessage(true);
      return;
    }

    if (!showWrongImagePatternMessage) {
      setShowWrongImagePatternMessage(false);
    }

    if (input.featured) {
      const promise = CreateService.post(
        input.title,
        input.desciption,
        input.image,
        true
      )
        .then(() => router.push("/rooms"))
        .then(() => form.reset());

      setSubmitPromise(promise);
    } else {
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
          <InputField label={t("titleInputField")} />
          <InputField label={t("descriptionInputField")} />
        </div>
        <div className={styles.itemRow}>
          <div>
            <InputField label={t("imageUrlInputField")} />
            {showWrongImagePatternMessage ? (
              <Text
                value={t("wrongImagePatternMessage")}
                type={TextType.TEXT}
                size="small"
                colorSchema={ColorSchema.BLACK}
              />
            ) : (
              ""
            )}
          </div>
          <div className={styles.featuredCheckboxContainer}>
            <label className="custom-control-label">
              <Text
                value={t("featuredCheckboxLabel")}
                type={TextType.TEXT}
                size="LARGE"
                colorSchema={ColorSchema.BLACK}
              />
            </label>
            <input
              type="checkbox"
              className={styles.featuredCheckbox}
              name={t("featuredCheckboxLabel")}
              aria-label={t("featuredCheckboxLabel")}
              id="customSwitches"
            />
          </div>
        </div>
        <div className={styles.itemRow}>
          <button
            type="submit"
            className={styles.submitButton}
            name={t("submitButton")}
          >
            {t("submitButton")}
          </button>
        </div>
      </form>
    </div>
  );
}
