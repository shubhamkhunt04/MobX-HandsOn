// MobX lib
import { observer } from "mobx-react";
import { values } from "mobx";

// Component
import TodoView from "./components/TodoView";
import TodoCounterView from "./components/TodoCounterView";

const randomId = () => Math.floor(Math.random() * 1000).toString(36);

const App = observer((props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "auto",
        width: "80%",
      }}
    >
      <button onClick={(e) => props.store.addTodo(randomId(), "New Task")}>
        Add Task
      </button>
      {values(props.store.todos).map((todo) => (
        <TodoView todo={todo} key={randomId()} />
      ))}
      <TodoCounterView store={props.store} />
    </div>
  );
});

export default App;
