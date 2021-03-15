import { useAll }         from "../hooks/useAll";
import styles             from "../styles/components/StoreBuy.module.css";

export default function StoreBuy({cps, price, priceUp, index}) {
  const { buyCps } = useAll();

  const handleBuyCps = () => {
    buyCps(cps, price);
    priceUp(index);
  }

  return (
    <div className={styles.storeBuyContainer}>
      <button
        type="button"
        className="btn btn-info shadow-lg"
        onClick={handleBuyCps}
      >
        Buy<br/>{Math.round(price)}
      </button>
      <button className="btn shadow-lg">+{cps} Cps</button>
    </div>
  );
}
