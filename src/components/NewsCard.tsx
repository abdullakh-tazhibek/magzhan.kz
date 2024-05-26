import { topics } from "./Header";
import { News } from "../types";

export const colors: string[] = [
  "#4B68A1",
  "#479CFF",
  "#FF6D6D",
  "#1EBD71",
  "#B957D2",
  "#FFB72C",
  "#AA2424",
  "#4B47E2",
];

interface NewsCardProps {
  item: News;
  index: number;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item, index }) => {
  return (
    <div>
      <div className={styles.grid__item}>
        <p>Тарих</p>
        <h3>
          Alem Comedy Fest, Mirèl и дискуссия по противодействию бытовому
          насилию
        </h3>
        <h4>12 қараша 2019</h4>
      </div>
    </div>
  );
};
