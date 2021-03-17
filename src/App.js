import { useAll }         from "./hooks/useAll";
import CookieMoney        from "./components/CookieMoney";
import ExperienceBar      from "./components/ExperienceBar";
import Store              from "./components/Store";
import AllContextProvider from "./contexts/AllContext";
import styles             from "./styles/components/App.module.css";
import "./styles/globals.css";

export default function App() {
  const { level } = useAll();

  return (
    <AllContextProvider>
      <div className={styles.container}>
        <ExperienceBar />

        <div className="row mb-5">
          <div className="col-sm-12 col-lg-6">
              <CookieMoney />
          </div>
          <div className="col-sm-12 col-lg-6">
              <Store />
          </div>
        </div>

        <div>
          <footer>
            <span>
              © Copyright 2021 - All Rights Reserved - Wallison Gabriel Ferrante.
            </span>
          </footer>
        </div>
      </div>
    </AllContextProvider>
  );
}
