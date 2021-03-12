import styles from "../styles/components/Store.module.css";
import StoreBuy from "../components/StoreBuy";
import { useState } from "react";

export default function Store() {

  const [values, setValues] = useState([
    {cps: 0.25, price: 100},//x--
    {cps: 7.5, price: 18000},//x30
    {cps: 300, price: 720000},//x40
    {cps: 21000, price: 50400000},//x70
  ])

  const handlePriceUp = (index) => {
    let value = values[index].price *= 3.58;
    const array = [...values];
    const index2 = values[index];
    array[index2] = {...array[index2]};
    array[index2].price = value;
    setValues( array );
  }

  return (
    <div className={styles.storeContainer}>
      <nav className="nav text-light shadow">
        <button className="btn btn-primary nav-link shadow w-25">Buy CPS's</button>
        <button className="btn nav-link shadow w-25">Buy Click's</button>
        <button className="btn nav-link shadow w-25">Settings</button>
        <button className="btn nav-link shadow w-25">Help</button>
      </nav>
      <div className="shadow">
        <StoreBuy cps={values[0].cps} price={values[0].price} priceUp={handlePriceUp} index={0}  />
        <StoreBuy cps={values[1].cps} price={values[1].price} priceUp={handlePriceUp} index={1}  />
        <StoreBuy cps={values[2].cps} price={values[2].price} priceUp={handlePriceUp} index={2}  />
        <StoreBuy cps={values[3].cps} price={values[3].price} priceUp={handlePriceUp} index={3}  />
        <div></div>
      </div>
    </div>
  );
}
