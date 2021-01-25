import React from "react";
import { observer } from "mobx-react";

const TodoView = observer((props) => {
  console.log(props.todo);
  return (
    <div>
      <input
        type="checkbox"
        checked={props.todo.done}
        onChange={() => props.todo.toggle()}
      />

      <input
        type="text"
        value={props.todo.name}
        onChange={(e) => props.todo.setName(e.target.value)}
      />
    </div>
  );
});

export default TodoView;
