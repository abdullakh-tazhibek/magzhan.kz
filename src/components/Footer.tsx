import styles from "../scss/components/footer.module.scss";

export const Footer: React.FC = () => {
  const topics: string[] = [
    "Ақпарат",
    "Әдебиет",
    "Өнер",
    "Ғылым",
    "Эксклюзив",
    "Карьера",
    "Спорт",
    "Тарих",
  ];

  return (
    <div className={styles.footer}>
      <ul>
        {topics.map((topicName, i) => (
          <li key={i}>{topicName}</li>
        ))}
      </ul>

      <hr />

      <p>Байлыныс үшін: Байлыныс үшін: magzhankz@gmail.com</p>

      <hr />

      <p>Барлық құқықтар сақталған@2024</p>
    </div>
  );
};
