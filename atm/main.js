import inquirer from "inquirer";
let myCode = 1234;
let myBalance = 50000; //US Dollars
let answerCode = await inquirer.prompt({
    name: "userInputedCode",
    type: "number",
    message: "Enter your pin code:",
});
if (answerCode.userInputedCode === myCode) {
    console.log("The code is correct.!");
    let selectTransaction = await inquirer.prompt({
        name: "userSelectedTransaction",
        type: "list",
        message: "Select one of the Option.",
        choices: ["Withdrawal", "Check Balance"],
    });
    if (selectTransaction.userSelectedTransaction === "Withdrawal") {
        let selectAmountMethod = await inquirer.prompt({
            name: "userSelectedAmountMethod",
            type: "list",
            message: "Select an amount method.",
            choices: ["Fast Cash", "Other Amount"],
        });
        if (selectAmountMethod.userSelectedAmountMethod === "Fast Cash") {
            let selectAmount = await inquirer.prompt({
                name: "userSelectedAmount",
                type: "list",
                message: "Select an amount.",
                choices: ["2000", "5000", "10000", "20000", "50000"],
            });
            if (selectAmount.userSelectedAmount === "2000") {
                console.log("Transaction has been successful!.");
                let remainingBalance = myBalance - 2000;
                console.log(`Your remaining balance is:$${remainingBalance}`);
                console.log('\t\t"Thanks For Using Atm!"\t\t');
            }
            else if (selectAmount.userSelectedAmount === "5000") {
                console.log("Transaction has been successful!.");
                let remainingBalance = myBalance - 5000;
                console.log(`Your remaining balance is:$${remainingBalance}`);
                console.log('\t\t"Thanks For Using Atm!"\t\t');
            }
            else if (selectAmount.userSelectedAmount === "10000") {
                console.log("Transaction has been successful!.");
                let remainingBalance = myBalance - 10000;
                console.log(`Your remaining balance is:$${remainingBalance}`);
                console.log('\t\t"Thanks For Using Atm!"\t\t');
            }
            else if (selectAmount.userSelectedAmount === "20000") {
                console.log("Transaction has been successful!.");
                let remainingBalance = myBalance - 20000;
                console.log(`Your remaining balance is:$${remainingBalance}`);
                console.log('\t\t"Thanks For Using Atm!"\t\t');
            }
            else if (selectAmount.userSelectedAmount === "50000") {
                console.log("Transaction has been successful!.");
                let remainingBalance = myBalance - 50000;
                console.log(`Your remaining balance is:$${remainingBalance}`);
                console.log('\t\t"Thanks For Using Atm!"\t\t');
            }
        }
        else if (selectAmountMethod.userSelectedAmountMethod === "Other Amount") {
            let inputAmount = await inquirer.prompt({
                name: "userInputedAmount",
                type: "number",
                message: "Enter Amount:",
            });
            if (inputAmount.userInputedAmount < myBalance) {
                console.log("Transaction has been successful!.");
                let remainingBalance = myBalance - inputAmount.userInputedAmount;
                console.log(`Your remaining balance is:$${remainingBalance}`);
                console.log('\t\t"Thanks For Using Atm!"\t\t');
            }
            else {
                console.log("Insufficient Balance!.");
                console.log(`You have only $${myBalance} in the Account.`);
                console.log('\t\t"Thanks For Using Atm!"\t\t');
            }
        }
    }
    else if (selectTransaction.userSelectedTransaction === "Check Balance") {
        console.log(`Your balance is:$${myBalance}`);
        console.log('\t\t"Thanks For Using Atm!"\t\t');
    }
}
else {
    console.log("Please enter a valid code!.");
}
