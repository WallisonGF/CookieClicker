import { useAll }         from "../hooks/useAll";
import StoreBuy           from "./StoreBuy";

export default function BuyCps() {
  const { valuesCps, handlePriceUpCps } = useAll();

  const handlePriceUp = (index) => {
    handlePriceUpCps(index);
  };

  return (
    <>
      {/*===============================*/}
      {/*========== Buys Cps ===========*/}
      {/*===============================*/}
      <StoreBuy
        cpc={0}
        cps={valuesCps[0].cps}
        price={valuesCps[0].price}
        priceUp={handlePriceUp}
        index={0}
      />
      <StoreBuy
        cpc={0}
        cps={valuesCps[1].cps}
        price={valuesCps[1].price}
        priceUp={handlePriceUp}
        index={1}
      />
      <StoreBuy
        cpc={0}
        cps={valuesCps[2].cps}
        price={valuesCps[2].price}
        priceUp={handlePriceUp}
        index={2}
      />
      <StoreBuy
        cpc={0}
        cps={valuesCps[3].cps}
        price={valuesCps[3].price}
        priceUp={handlePriceUp}
        index={3}
      />
      <div></div>
    </>
  );
}
