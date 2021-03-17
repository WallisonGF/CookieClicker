import { useAll }         from "../hooks/useAll";
import StoreBuy           from "./StoreBuy";

export default function BuyCpc() {
  const { handlePriceUpCpc, valuesCpc } = useAll();

  const handlePriceUp = (index) => {
    handlePriceUpCpc(index);
  };

  return (
    <>
      {/*===============================*/}
      {/*========== Buys Cpc ===========*/}
      {/*===============================*/}
      <StoreBuy
        cps={0}
        cpc={valuesCpc[0].cpc}
        price={valuesCpc[0].price}
        priceUp={handlePriceUp}
        index={0}
      />
      <StoreBuy
        cps={0}
        cpc={valuesCpc[1].cpc}
        price={valuesCpc[1].price}
        priceUp={handlePriceUp}
        index={1}
      />
      <StoreBuy
        cps={0}
        cpc={valuesCpc[2].cpc}
        price={valuesCpc[2].price}
        priceUp={handlePriceUp}
        index={2}
      />
      <StoreBuy
        cps={0}
        cpc={valuesCpc[3].cpc}
        price={valuesCpc[3].price}
        priceUp={handlePriceUp}
        index={3}
      />
      <div></div>
    </>
  );
}
