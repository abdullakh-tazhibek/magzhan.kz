import styles from "../scss/components/home.module.scss";

export const randFunc = (arr: string[]) => {
  return Math.floor(Math.random() * arr.length);
};

export const Home = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}></div>
    </div>
  );
};
