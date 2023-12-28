import styles from "../App.module.css";
const DisplayComponent = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      readOnly
      value={displayValue}
    />
  );
};
export default DisplayComponent;
