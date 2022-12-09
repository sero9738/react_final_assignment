import { clsx } from "clsx";
import React from "react";
import styles from "./NavigationItem.module.css";

interface NavigationItemProps {
  name: string;
  route: string;
  currentRoute: string;
  setRouteCallback: (route: string) => any;
}

function NavigationItem({
  name,
  route,
  currentRoute,
  setRouteCallback,
}: NavigationItemProps) {
  function onClick(route: string) {
    setRouteCallback(route);
  }

  return (
    <button
      type="button"
      className={clsx(
        styles.navItem,
        currentRoute === route && styles.selectedNavItem
      )}
      onClick={() => onClick(route)}
    >
      {name}
    </button>
  );
}

export default NavigationItem;