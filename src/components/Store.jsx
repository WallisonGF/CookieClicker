import { useState }   from "react";
import BuyCps         from "./BuyCps";
import BuyCpc         from "./BuyCpc";
import styles         from "../styles/components/Store.module.css";
import Settings from "./Settings";
import Help from "./Help";

export default function Store() {
  const [navAtual, setNavAtual] = useState(0);
  const navs = [
    <BuyCps  />,
    <BuyCpc  />,
    <Settings />,
    <Help />,
  ];

  function handleChangeNav(index) {
    var element = document.getElementById(`btn-${index}`);
    element.classList.add("btn-primary");
    setNavAtual(index);
    if(element.onblur){
      handleNavFocusOut();
    }
  }
  function handleNavFocusOut(index) {
    var element = document.getElementById(`btn-${index}`);
    element.classList.remove("btn-primary");
  }

  return (
    <div className={styles.storeContainer}>
      {/* ============================== */}
      {/* =========== NAVBAR =========== */}
      {/* ============================== */}
      <nav className="nav text-light shadow">
        <button type="button" id="btn-0" className="btn nav-link shadow w-25"
          onClick={() => {handleChangeNav(0)}}
          onBlur={() => {handleNavFocusOut(0)}}
        >
            Buy CPS's
        </button>
        <button type="button" id="btn-1" className="btn nav-link shadow w-25"
          onClick={() => {handleChangeNav(1)}}
          onBlur={() => {handleNavFocusOut(1)}}
        >
          Buy CPC's
          </button>
        <button type="button" id="btn-2" className="btn nav-link shadow w-25"
          onClick={() => {handleChangeNav(2)}}
          onBlur={() => {handleNavFocusOut(2)}}
        >
          Settings
        </button>
        <button type="button" id="btn-3" className="btn nav-link shadow w-25"
          onClick={() => {handleChangeNav(3)}}
          onBlur={() => {handleNavFocusOut(3)}}
        >
          Help
        </button>
      </nav>

      {/* ============================== */}
      {/* ======== Buys/Settings ======= */}
      {/* ============================== */}
      <div className="shadow">
        { navs[navAtual] }
      </div>
    </div>
  );
}
