import React from "react";
import { observer } from "mobx-react";

const TodoCounterView = observer((props) => {
  return (
    <div>
      {props.store.pendingCount} pending,{props.store.completedCount} complete
    </div>
  );
});

export default TodoCounterView;
