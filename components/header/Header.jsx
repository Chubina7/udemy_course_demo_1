import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
// Photo source import
import LogoImage from "@/assets/logo.png";
import MainBackground from "../mainBackground/MainBackground";

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
              <Link href={"/meals"}>Browse Meals</Link>
            </li>
            <li>
              <Link href={"/community"}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
