"use client";

import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  //console.log(pathname);
  //console.log(item);
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
