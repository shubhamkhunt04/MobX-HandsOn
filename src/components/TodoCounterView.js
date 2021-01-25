import React from "react";
import { observer } from "mobx-react";

const TodoCounterView = observer((props) => {
  return (
    <div>
      <h1>
        {props.store.pendingCount} pending,{props.store.completedCount} complete
      </h1>
    </div>
  );
});

export default TodoCounterView;
