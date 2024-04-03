#! /usr/bin/env node
import inquirer from "inquirer";
let todos: string[] = [];
async function createTodo(todos: string[]) {
  let condition = true;
  console.log("\n**************** Welcome to the Todo App. ****************\n");
  while (condition) {
    let answer = await inquirer.prompt({
      name: "userSelectedOperation",
      type: "list",
      message: "Select an operation.",
      choices: ["Add", "Update", "View", "Delete", "Exit"],
    });
    if (answer.userSelectedOperation === "Add") {
      let addTodo = await inquirer.prompt({
        name: "userAddedTodo",
        type: "input",
        message: "Add items to the list:",
      });
      todos.push(addTodo.userAddedTodo);
      console.log("\n**************** Item has been added. ****************\n");
      todos.forEach((todo) => console.log(todo));
      console.log("\n******************************************************\n");
    }
    if (answer.userSelectedOperation === "Update") {
      let updateTodo = await inquirer.prompt({
        name: "userSelectedItemForUpdate",
        type: "list",
        message: "Update items in the list:",
        choices: todos.map((item) => item),
      });
      let addTodo = await inquirer.prompt({
        name: "userAddedTodo",
        type: "input",
        message: "Add items to the list",
      });
      let updatedTodo = todos.filter(
        (val) => val !== updateTodo.userSelectedItemForUpdate
      );
      todos = [...updatedTodo, addTodo.userAddedTodo];
      console.log("\n**************** Item has been updated. ****************\n");
      todos.forEach((todo) => console.log(todo));
      console.log("\n******************************************************\n");
    }
    if (answer.userSelectedOperation === "View") {
      console.log("\n******************** TO DO LIST *********************\n");
      todos.forEach((todo) => console.log(todo));
      console.log("\n******************************************************\n");
    }
    if (answer.userSelectedOperation === "Delete") {
      let deleteTodo = await inquirer.prompt({
        name: "userSelectedItemForDelete",
        type: "list",
        message: "Update items in the list.",
        choices: todos.map((item) => item),
      });
      let updatedTodo = todos.filter(
        (val) => val !== deleteTodo.userSelectedItemForDelete
      );
      todos = [...updatedTodo];
      console.log("\n**************** Item has been deleted. ****************\n");
      todos.forEach((todo) => console.log(todo));
      console.log("\n******************************************************\n");
    }
    if (answer.userSelectedOperation === "Exit") {
      condition = false;
    }
  }
}
createTodo(todos);
