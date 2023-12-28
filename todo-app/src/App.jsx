import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import TodoItemsWithInput from "./components/TodoItemsWithInput";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemContext from "./store/TodoItemContext";

function App() {
  const [todoItems, settodoItems] = useState([]);
  const addTodo = (todoName, todoDate) => {
    const newItem = { name: todoName, dueDate: todoDate };
    console.log(newItem);
    settodoItems((currentvalue) => [...currentvalue, newItem]);
  };

  const removeTodo = (todoName) => {
    const todoItemAfterDeletion = todoItems.filter(
      (item) => item.name !== todoName
    );
    settodoItems(todoItemAfterDeletion);
  };
  return (
    <TodoItemContext.Provider value={{ todoItems, addTodo, removeTodo }}>
      <center className="todo-container">
        <AppName />
        <WelcomeMessage />
        <AddTodo />
        <TodoItemsWithInput />
      </center>
    </TodoItemContext.Provider>
  );
}
export default App;
