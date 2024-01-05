import React, { Suspense } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const data = await getMeals();

  return <MealsGrid meals={data} />;
}

export default async function MealsPage() {
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
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals ...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
