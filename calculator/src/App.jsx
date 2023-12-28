import { useState } from "react";
import styles from "./App.module.css";
import DisplayComponent from "./components/DisplayComponent";
import ButtonsComponent from "./components/ButtonsComponent";
function App() {
  const updateDisplay = (buttonValue) => {
    let newVal = calVal + buttonValue;
    if (buttonValue === "=") {
      newVal = eval(calVal);
    } else if (buttonValue === "C") {
      newVal = "";
    }
    setcalVal(newVal);
  };
  const [calVal, setcalVal] = useState("");

  const butttonTextList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.calculator}>
      <DisplayComponent displayValue={calVal} />
      <div className={styles.buttonContainer}>
        {butttonTextList.map((item) => (
          <ButtonsComponent
            key={item}
            ButtonText={item}
            onclick={updateDisplay}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
