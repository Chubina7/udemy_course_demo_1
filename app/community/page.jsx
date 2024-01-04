import Image from "next/image";
import styles from "./page.module.css";
// Photo source import
import MealIcon from "@/assets/icons/meal.png";
import CommunityIcon from "@/assets/icons/community.png";
import EventsIcon from "@/assets/icons/events.png";

export default function CommunityPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          One shared passion: <span className={styles.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={styles.main}>
        <h2>Community Perks</h2>

        <ul className={styles.perks}>
          <li>
            <Image src={MealIcon} alt="A delicious meal" />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src={CommunityIcon} alt="A crowd of people, cooking" />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src={EventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
