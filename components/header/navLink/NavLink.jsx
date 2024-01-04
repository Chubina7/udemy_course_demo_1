"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.active} ${styles.link}` : styles.link
      }
    >
      {children}
    </Link>
  );
}
