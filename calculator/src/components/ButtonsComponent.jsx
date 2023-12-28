import styles from "../App.module.css";
const ButtonsComponent = ({ ButtonText, onclick }) => {
  return (
    <button
      className={styles.button}
      onClick={() => onclick(ButtonText)}
      value={ButtonText}
    >
      {ButtonText}
    </button>
  );
};
export default ButtonsComponent;
