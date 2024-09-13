import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";



function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "04/10/24",
  //   },
  //   {
  //     name: "Go To College",
  //     dueDate: "04/10/24",
  //   },
  //   {
  //     name: "Drink Water",
  //     dueDate: "Every 2 hour",
  //   },
  // ];

  //const [todoItems, setTodoItems] = useState([]);

 
  return (
   <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <WelcomeMessage></WelcomeMessage>
      <TodoItems/>
    </center>
    </TodoItemsContextProvider>
  );
}

export default App;
