import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import MainBackground from "./mainBackground/MainBackground";
import NavLink from "./navLink/NavLink";
// Photo source import
import LogoImage from "@/assets/logo.png";

export default function Header() {
  return (
    <>
      <MainBackground />
      <header className={styles.header}>
        <Link href={"/"} className={styles.logo}>
          <Image
            src={LogoImage}
            className={styles.logoImg}
            alt="a plate with food"
            priority
          />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
