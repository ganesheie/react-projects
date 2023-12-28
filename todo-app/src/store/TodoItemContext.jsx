import { createContext } from "react";

const TodoItemsContext = createContext({
  todoItems: [],
  addTodo: () => {},
  removeTodo: () => {},
});
export default TodoItemsContext;
