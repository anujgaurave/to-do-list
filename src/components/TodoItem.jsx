import React, { useContext } from 'react';
import { RiDeleteBin3Fill } from "react-icons/ri";
import { TodoItemsContext } from '../store/todo-items-store';

function TodoItem({ todoName, todoDate }) {
  const {deleteItem}=useContext(TodoItemsContext)
  return (
    <div className="container">
      <div className="row row-sec">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button 
            type="button" 
            className="btn btn-danger button-sec" 
            onClick={()=>deleteItem(todoName)

          }
          >
            <RiDeleteBin3Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
