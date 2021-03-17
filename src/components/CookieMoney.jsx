import CookieImage        from "../assets/img/cookie.png";
import OneMore            from "../assets/img/OneMore.png";
import { useAll }         from "../hooks/useAll";
import styles             from "../styles/components/CookieMoney.module.css";

export default function CookieMoney(props) {
  const { toMine, cookies, cookiesPerClick, cookiesPerSecond } = useAll();

  function handleMine() {
    toMine();
  }

  return (
    <div className={styles.cookieMoneyContainer}>
      <article>
        {/*===============================*/}
        {/*========= Money Info ==========*/}
        {/*===============================*/}
        <section>
          <span>Cookies: {Math.round(cookies)}</span>
          <span>Click: {cookiesPerClick}</span>
          <span>Cps: {cookiesPerSecond}</span>
        </section>
        {/*===============================*/}
        {/*========= Money Click =========*/}
        {/*===============================*/}
        <section>
          <button type="button"
            onClick={handleMine}
          >
            <img src={CookieImage} alt="Clicker"></img>
            <img src={OneMore} alt="One More"></img>
          </button>
        </section>
      </article>
    </div>
  );
}
