import { Route, Routes } from "react-router-dom";

import { NewsCard } from "./components/NewsCard";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import styles from "./scss/app.scss";

export const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/:"} element={<NewsCard />} />
      </Routes>

      <Footer />
    </div>
  );
};
