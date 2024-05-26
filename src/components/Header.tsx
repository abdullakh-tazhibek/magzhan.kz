import { MagzhanIcon } from "../assets/MagzhanIcon";
import { MagzhanLogo } from "../assets/MagzhanLogo";
import { Phrase } from "../assets/Phrase";
import { Search } from "../assets/Search";

import styles from "../scss/components/header.module.scss";

export const topics: string[] = [
  "Ақпарат",
  "Әдебиет",
  "Өнер",
  "Ғылым",
  "Эксклюзив",
  "Карьера",
  "Спорт",
  "Тарих",
];

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__icons}>
        <Phrase />
        <MagzhanLogo />
        <MagzhanIcon />
      </div>

      <div className={styles.search}>
        <ul>
          {topics.map((topicName, i) => (
            <li key={i}>{topicName}</li>
          ))}
        </ul>
        <div className={styles.search__button}>
          <Search />
        </div>
      </div>
    </div>
  );
};
