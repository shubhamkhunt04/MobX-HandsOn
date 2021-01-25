import { types } from "mobx-state-tree";
import { values } from "mobx";
// Model for the APP
import Todo from "./models/TodoModel";
import User from "./models/UserModel";

const rootStore = types
  .model({
    users: types.map(User),
    todos: types.array(Todo),
  })
  .views((self) => ({
    get pendingCount() {
      return values(self.todos).filter((todo) => !todo.done).length;
    },
    get completedCount() {
      return values(self.todos).filter((todo) => todo.done).length;
    },
    getTodosWhereDoneIs(done) {
      return values(self.todos).filter((todo) => todo.done === done).length;
    },
  }))
  .actions((self) => {
    function addTodo(id, name) {
      self.todos.push({
        id,
        name,
      });
    }
    function deleteTodo(id) {
      console.log("deltetodo", id);
      //   console.log(store.todos);
      //   self.todos.forEach((todo) => console.log("loop todo", todo));
      store.todos = self.todos.filter((todo) => todo.id !== id);
      //   console.log(values(self.todos.filter((todo) => todo.name !== name)));
    }
    return { addTodo, deleteTodo };
  });

const store = rootStore.create({
  users: {},
  todos: [
    {
      id: 1,
      name: "shubham",
      done: true,
    },
  ],
});

export default store;
