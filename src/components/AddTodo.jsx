import { useRef, useContext } from "react";
import { MdAddComment } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    console.log(`${todoName} due on: ${dueDate}`);
    addNewItem(todoName, dueDate);

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter TODO Here"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
          >
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
