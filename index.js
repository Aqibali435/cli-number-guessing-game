#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate  a rondom number - done
// 2) user input for guessing number - done
// 3) compare user input with computer generated number and show result - done
const randowmNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 10:",
    }
]);
if (answers.userGuessedNumber === randowmNumber) {
    console.log("congratulations! You guessed right number");
}
else {
    console.log("You guessd wrong number");
}
