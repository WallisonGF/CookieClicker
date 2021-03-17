import { createContext, useEffect, useState }         from "react";

export const AllContext = createContext({})

export default function AllContextProvider({ children}) {
  //===============================
  //======= ExperienceBar =========
  //===============================
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0);
  const experienceToNextLevel = Math.pow(((level + 1) * 4), 2);

  //===============================
  //==========CookieMoney==========
  //===============================
  const [time, setTime] = useState(0.1 * 60);
  let [cookies, setCookies] = useState(100);
  let [cookiesPerClick, setCookiesPerClick] = useState(1);
  let [cookiesPerSecond, setCookiesPerSecond] = useState(0.5);

  //===============================
  //=======Cookie per Second=======
  //===============================
  useEffect(() => {
    setCookies(cookies + cookiesPerSecond);
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [time]);

  
  //===============================
  //============Buy Cps============
  //===============================
  const [valuesCps, setValuesCps] = useState([
    { cps: 0.5, price: 50 }, //x--
    { cps: 7.5, price: 18000 }, //x15
    { cps: 300, price: 720000 }, //x40
    { cps: 21000, price: 50400000 }, //x70
  ]);
  const handlePriceUpCps = (index) => {
    let value = (valuesCps[index].price *= 1.1);
    const array = [...valuesCps];
    const index2 = valuesCps[index];
    array[index2] = { ...array[index2] };
    array[index2].price = value;
    setValuesCps(array);
  };
  //===============================
  //============Buy Cpc============
  //===============================
  const [valuesCpc, setValuesCpc] = useState([
    { cpc: 0.5, price: 50 }, //x--
    { cpc: 7.5, price: 18000 }, //x15
    { cpc: 300, price: 720000 }, //x40
    { cpc: 21000, price: 50400000 }, //x70
  ]);
  const handlePriceUpCpc = (index) => {
    let value = (valuesCpc[index].price *= 2.1);
    const array = [...valuesCpc];
    const index2 = valuesCpc[index];
    array[index2] = { ...array[index2] };
    array[index2].price = value;
    setValuesCpc(array);
  };

  //===============================
  //===========Functions===========
  //===============================
  function toMine() {
    setCookies(cookies + cookiesPerClick);
    currentExperienceUp();
  }

  function levelUp() {
    setLevel(level + 1);
  }

  function currentExperienceUp() {
    setCurrentExperience(currentExperience + 1);
    if(currentExperience >= experienceToNextLevel){
      levelUp();
    }
  }

  function buyCpsOrCps(cps, cpc, value) {
    if(cookies < value){
      alert('Insufficient Money!');
      return false;
    } else{
      setCookies(cookies - value);
      cps !== 0
        ? setCookiesPerSecond(cookiesPerSecond + cps)
        : setCookiesPerClick(cookiesPerClick + cpc)
      return true;
    }  
  }

  return (
    <AllContext.Provider value={{
      level,
      currentExperience,
      experienceToNextLevel,
      levelUp,
      currentExperienceUp,
      toMine,
      cookies,
      cookiesPerClick,
      cookiesPerSecond,
      buyCpsOrCps,
      handlePriceUpCpc,
      handlePriceUpCps,
      valuesCpc,
      valuesCps,
    }}>
      {children}
    </AllContext.Provider>
  )
}