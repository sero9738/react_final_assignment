import React, { useContext } from "react";
import styles from "./InputField.module.css";
import Text from "../Text/Text";
import { ColorSchema } from "../../types";
import { TextType } from "../../types";

interface InputFieldProps {
  label: string;
  inputRef: any;
}

export default function InputField({ label, inputRef }: InputFieldProps) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <Text
          value={label}
          type={TextType.TEXT}
          size="MEDIUM"
          colorSchema={ColorSchema.BLACK}
        />
      </div>
      <div className={styles.inputContainer}>
        <input className={styles.input} ref={inputRef} type="text" name={label} required={true} />
      </div>
    </div>
  );
}
