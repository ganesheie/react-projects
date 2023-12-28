import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoItemContext from "../store/TodoItemContext";
function TodoItemsWithInput() {
  const { todoItems } = useContext(TodoItemContext);
  console.log("todo items : " + todoItems);
  return (
    <div className="todo-items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
}
export default TodoItemsWithInput;
