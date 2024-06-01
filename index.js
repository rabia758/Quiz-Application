#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//welcom message
console.log(chalk.bgWhiteBright.rgb(123, 0, 0)("\n\t>>>>>>>>>>>>>>>>> WELCOM TO MY PROJECTS<<<<<<<<<<<<<<<\t\n"));
console.log(chalk.bgCyanBright.magentaBright("\n\t>>>>>>>>>>>>>>>QUIZ-APPLICATION<<<<<<<<<<<<<<<<\t\n"));
console.log(chalk.bgWhiteBright.rgb(123, 0, 0)("\nThis quiz base on 5 question: Each question carry on 2 marks!\n"));
console.log(chalk.bgCyanBright.green("\n\t lets get started1\t\n"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: (chalk.bgCyanBright.magentaBright("\nQ1. What is TypeScript primarily used for?")),
        choices: ["A. Memory Management",
            "B. Dynamic Typing",
            "C. Static Typing",
            "D. Asynchronous operations"]
    }, {
        name: "question_2",
        type: "list",
        message: (chalk.bgCyanBright.magentaBright("\nQ2. Which of the following is NOT a valid TypeScript data type?")),
        choices: ["A. void",
            "B. any",
            "C. dynamic",
            "D. tuple"]
    }, {
        name: "question_3",
        type: "list",
        message: (chalk.bgCyanBright.magentaBright("\nQ3. How do you denote a variable as readonly in TypeScript?")),
        choices: ["A. const",
            "B. static",
            "C. readonly",
            "D. fixed"
        ]
    }, {
        name: "question_4",
        type: "list",
        message: (chalk.bgCyanBright.magentaBright("\nQ4. How do you specify that a function does not return anything in TypeScript?")),
        choices: ["A. function myFunc(): undefined",
            "B. function myFunc(): void",
            "C. function myFunc(): null",
            "D. function myFunc(): None"]
    }, {
        name: "question_5",
        type: "list",
        message: (chalk.bgCyanBright.magentaBright("\nQ5. How do you define a custom type in TypeScript?")),
        choices: ["A. interface",
            "B. typedef",
            "C. type",
            "D. Both A and C"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "C. Static Typing":
        console.log(chalk.rgb(125, 245, 65).bold.italic("\n1.corrrect answer!\n"));
        score++;
        break;
    default: {
        console.log("1.incorect answer!");
    }
}
switch (quiz.question_2) {
    case "C. dynamic":
        console.log(chalk.rgb(15, 135, 65).bold("\n2.corrrect answer!\n"));
        score++;
        break;
    default: {
        console.log("2.incorect answer!");
    }
}
switch (quiz.question_3) {
    case "C. readonly":
        console.log(chalk.rgb(65, 0, 135).italic("\n3.corrrect answer!\n"));
        score++;
        break;
    default: {
        console.log(chalk.rgb(125, 32, 65).italic("3.incorect answer!"));
    }
}
switch (quiz.question_4) {
    case "B. function myFunc(): void":
        console.log(chalk.bgBlueBright.yellowBright("\n4.corrrect answer!\n"));
        score++;
        break;
    default: {
        console.log(chalk.bgBlueBright.yellowBright("4.incorect answer!"));
    }
}
switch (quiz.question_5) {
    case "D. Both A and C":
        console.log(chalk.rgb(23, 65, 95)("\n5.corrrect answer!\n"));
        score++;
        break;
    default: {
        console.log("5.incorect answer!");
    }
}
console.log(chalk.bgWhiteBright.rgb(123, 0, 0)(`\ncongratulation! your score is ${score}\n`));
console.log(chalk.bgCyanBright.magentaBright("\nTHANKYOU KEEP IT UP!\n"));
console.log("################-----------------------##################");
