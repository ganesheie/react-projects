import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import TodoItemContext from "../store/TodoItemContext";
const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemContext);
  todoItems.length === 0 && (
    <p className={styles.welcome}>You Don't have any Todo as yet</p>
  );
};

export default WelcomeMessage;
