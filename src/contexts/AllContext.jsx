import { createContext, useEffect, useState }         from "react";

export const AllContext = createContext({})

export default function AllContextProvider({ children}) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0);
  const experienceToNextLevel = Math.pow(((level + 1) * 4), 2);

  const [time, setTime] = useState(0.1 * 60);
  let [cookies, setCookies] = useState(1);
  let [cookiesPerClick, setCookiesPerClick] = useState(0.50);
  let [cookiesPerSecond, setCookiesPerSecond] = useState(0.25);

  useEffect(() => {
    setCookies(cookies + cookiesPerSecond);
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [time]);

  function toMine() {
    setCookies(cookies + cookiesPerClick);
    currentExperienceUp();
  }

  function levelUp() {
    setLevel(level + 1);
  }

  function currentExperienceUp() {
    setCurrentExperience(currentExperience + cookiesPerClick);
    if(currentExperience >= experienceToNextLevel){
      levelUp();
    }
  }

  function buyCps(cps, value) {
    if(cookies < value){
      alert('Insufficient Money!');
    } else{
      setCookies(cookies - value);
      setCookiesPerSecond(cookiesPerSecond + cps);
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
      buyCps,
      cookies,
      cookiesPerClick,
      cookiesPerSecond,
    }}>
      {children}
    </AllContext.Provider>
  )
}