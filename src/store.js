import { types } from "mobx-state-tree";
import { values } from "mobx";
// Model for the APP
import Todo from "./models/TodoModel";
import User from "./models/UserModel";

const rootStore = types
  .model({
    users: types.map(User),
    todos: types.map(Todo),
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
      self.todos.set(id, Todo.create({ name }));
    }
    return { addTodo };
  });

const store = rootStore.create({
  users: {},
  todos: {
    1: {
      name: "shubham",
      done: true,
    },
  },
});

export default store;
