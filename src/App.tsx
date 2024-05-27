import { Route, Routes } from "react-router-dom";

import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import styles from "./scss/app.scss";

export const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Routes>
        <Route
          path="/https://abdullakh-tazhibek.github.io/magzhan.kz/"
          element={<Home />}
        />
      </Routes>

      <Footer />
    </div>
  );
};
