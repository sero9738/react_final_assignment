import NavigationItem from "../NavigationItem/NavigationItem";
import Link from "next/link";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.linkWrapper}>
        <Link className={styles.link} href="/rooms">
          Cabins
        </Link>
      </div>
      <div className={styles.linkWrapper}>
        <Link className={styles.link} href="/create">
          Add cabins
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
