import React from "react";
import styles from "./MealsGrid.module.css";
import MealItem from "./mealItem/MealItem";

export default function MealsGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}
