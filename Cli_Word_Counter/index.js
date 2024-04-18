#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// building a word counter
const input = await inquirer.prompt([
    { name: "sentence",
        type: "input",
        message: "Enter a sentence to count the words:" }
]);
const words = input.sentence.trim().split(" ");
console.log(words);
console.log(chalk.yellowBright(`\nThe number of words in the sentence is "${words.length}"`));
