import { useContext, useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import TodoItemContext from "../store/TodoItemContext";
function AddTodo() {
  const getDefaultDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = yyyy + "-" + mm + "-" + dd;

    return formattedToday;
  };

  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const { addTodo } = useContext(TodoItemContext);
  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;

    addTodo(todoName, dueDate);
    todoDateElement.current.value = getDefaultDate();
    todoNameElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row row-margin">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            defaultValue=""
            placeholder="Add Todo Item"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            defaultValue={getDefaultDate()}
            ref={todoDateElement}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
