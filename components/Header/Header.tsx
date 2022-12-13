import React, { ReactNode } from "react";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import styles from "./Header.module.css";
import Text from "../Text/Text";
import { TextType } from "../../types";
import { ColorSchema } from "../../types";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/en.json`)).default,
    },
  };
}

export default function Header({ children }: { children: ReactNode }) {
  const t = useTranslations("Header");

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Text
          value={t("title")}
          type={TextType.HEADLINE}
          size="MEDIUM"
          colorSchema={ColorSchema.WHITE}
        />
      </div>
      <div className={styles.children}>{children}</div>
    </header>
  );
}
