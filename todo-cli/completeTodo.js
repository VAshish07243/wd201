var argv = require('minimist')(process.argv.slice(2));
const db = require("./models/index");
const markAsComplete = async (id) => {
  try {
    await db.Todo.markAsComplete(id);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  const { id } = argv;
  if(!id) {
    throw new Error("Need to pass an ID");
  }
  if(!Number.isInteger(id)) {
    throw new Error("The ID needs to be an Integer")
  }
  await markAsComplete(id);
  await db.Todo.showList();
})();
