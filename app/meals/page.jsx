import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import getMeals from "@/lib/meals";

export default async function MealsPage() {
  const data = await getMeals();
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipie and cook it yourself. It is easy and fun
        </p>
        <p className={styles.cta}>
          <Link href={"/meals/share"}>Share your favourite meal</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={data} />
      </main>
    </>
  );
}
