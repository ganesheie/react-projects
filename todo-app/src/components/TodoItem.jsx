import { useContext } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import TodoItemContext from "../store/TodoItemContext";
function TodoItem({ todoName, todoDate }) {
  const { removeTodo } = useContext(TodoItemContext);
  return (
    <div className="container">
      <div className="row row-margin">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 center">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeTodo(todoName)}
          >
            <AiFillMinusCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
