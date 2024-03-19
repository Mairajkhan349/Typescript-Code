#! /usr/bin/env node
import inquirer from "inquirer";
let bmiScore = await inquirer.prompt([
    { message: "Enter your body weight in Kilo Grams", type: "number", name: "weightInKilograms" },
    { message: "Enter your height in Meters", type: "number", name: "heightInMeters" },
]);
let heightInMeterSquare = bmiScore.heightInMeters ** 2;
bmiScore = bmiScore.weightInKilograms / heightInMeterSquare;
if (bmiScore < 18.5) {
    console.log("You are under weight");
}
else if (bmiScore >= 18.5 && bmiScore <= 24.9) {
    console.log("You are normal");
}
else if (bmiScore >= 25 && bmiScore <= 29.9) {
    console.log("You are over weight");
}
else if (bmiScore >= 30 && bmiScore <= 34.9) {
    console.log("You are obese of level 1");
}
else if (bmiScore >= 35 && bmiScore <= 39.9) {
    console.log("You are obese of level 2");
}
else if (bmiScore >= 40) {
    console.log("You are an extreme obese");
}
else if (bmiScore == 0) {
    console.log("Please enter valid information");
}
else {
    console.log("Please enter your body weight and height");
}
