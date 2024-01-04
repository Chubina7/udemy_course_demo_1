"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ImagesSlidshow.module.css";

// Photo source import
import BurgerImg from "@/assets/burger.jpg";
import CurryImg from "@/assets/curry.jpg";
import DumplingsImg from "@/assets/dumplings.jpg";
import MacncheeseImg from "@/assets/macncheese.jpg";
import PizzaImg from "@/assets/pizza.jpg";
import SchnitzelImg from "@/assets/schnitzel.jpg";
import TomatoSaladImg from "@/assets/tomato-salad.jpg";

const images = [
  { image: BurgerImg, alt: "A delicious, juicy burger" },
  { image: CurryImg, alt: "A delicious, spicy curry" },
  { image: DumplingsImg, alt: "Steamed dumplings" },
  { image: MacncheeseImg, alt: "Mac and cheese" },
  { image: PizzaImg, alt: "A delicious pizza" },
  { image: SchnitzelImg, alt: "A delicious schnitzel" },
  { image: TomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? styles.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
