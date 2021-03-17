import { useAll }         from "../hooks/useAll";
import styles             from "../styles/components/StoreBuy.module.css";

export default function StoreBuy({cps, cpc, price, priceUp, index}) {
  const { buyCpsOrCps } = useAll();

  const handleBuyCpsOrCpc = () => {
    { buyCpsOrCps(cps, cpc, price) && priceUp(index)}
  }

  return (
    <div className={styles.storeBuyContainer}>
      {/*===============================*/}
      {/*========= Buy Values ==========*/}
      {/*===============================*/}
      <button
        type="button"
        className="btn btn-info shadow-lg"
        onClick={handleBuyCpsOrCpc}
      >
        Buy<br/>{Math.round(price)}
      </button>
      {/*===============================*/}
      {/*======== PurchaseInfo =========*/}
      {/*===============================*/}
      <button className="btn shadow-lg">
        +{cps !== 0 ? cps + " Cps" : cpc + " Cpc"}
      </button>
    </div>
  );
}
