const db = require("./models/index");

const listTodo = async () => {
  try {
    await db.Todo.showList();
  } catch (Error) {
    console.error(Error);
  }
};
(async () => {
  await listTodo();
})();
