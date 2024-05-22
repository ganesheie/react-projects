import { useEffect, useState } from "react";
import DisplayCounter from "./components/DisplayCounter";
import UseEffectComp1 from "./components/UseEffectComponents/UseEffectComp1";

function App() {
  const [counter, setCounter] = useState(0);
  let UseEffectounter = 0;
  const handleClick = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    const UseEffectounterMethod = async () => {
      UseEffectounter = counter;
      console.log("countervalue after hook", UseEffectounter);
    };

    UseEffectounterMethod();
    return () => {
      console.log("return function called");
    };
  }, []);
  console.log(UseEffectounter);
  return (
    <div>
      <DisplayCounter counter={counter} handleClick={handleClick} />
      <UseEffectComp1 counter={UseEffectounter} />
    </div>
  );
}

export default App;
