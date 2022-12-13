import Link from "next/link";
import styles from "./Navigation.module.css";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/en.json`)).default,
    },
  };
}

function Navigation() {
  const t = useTranslations("Header");

  return (
    <nav className={styles.nav}>
      <div className={styles.linkWrapper}>
        <Link className={styles.link} href="/rooms">
          {t("roomsNavButton")}
        </Link>
      </div>
      <div className={styles.linkWrapper}>
        <Link className={styles.link} href="/create">
          {t("createNavButton")}
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
