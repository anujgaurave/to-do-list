import { createContext, useReducer } from "react";

// Create the context with default values
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// Reducer function to manage the state based on action types
const todoItemsReducer = (currTodoItems, action) => {
  switch (action.type) {
    case "NEW_ITEM":
      return [
        ...currTodoItems,
        { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
      ];
    case "DELETE_ITEM":
      return currTodoItems.filter((item) => item.name !== action.payload.itemName);
    default:
      return currTodoItems;
  }
};

// Context provider component
const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    dispatchTodoItems({
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    });
  };

  const deleteItem = (todoItemName) => {
    dispatchTodoItems({
      type: "DELETE_ITEM",
      payload: { itemName: todoItemName },
    });
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
