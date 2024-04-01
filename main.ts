import inquirer from "inquirer"

let todo = [];
let flag = true;
while (flag) {
    let addTask= await inquirer.prompt([
        {
        name: "toDo",
        message: "what you want to add in to Do?",
        type: "input"
        },
        {
            name:"AddMore",
            type: "confirm",
            Message: "Do you want to add more",
            default: "false"
        }
    ]);
    todo.push(addTask.toDo);
    flag = addTask.AddMore
    console.log(todo)
}

