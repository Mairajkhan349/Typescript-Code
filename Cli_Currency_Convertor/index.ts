#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n*************** WELCOME TO CURRENCY CONVERTOR ***************\n");

const currenciesExchangeRate: any = {
  UnitedStatesDollar_USD: 1, //base currency
  Euro_EUR: 0.92,
  JapaneseYen_JPY: 151.61,
  BritishPoundSterling_GBP: 0.79,
  SwissFranc_CHF: 0.9,
  CanadianDollar_CAD: 1.36,
  AustralianDollar_AUD: 1.52,
  ChineseYuan_CNY: 7.23,
  IndianRupee_INR: 83.3,
  SouthKoreanWon_KRW: 1351.26,
  ThaiBaht_THB: 36.52,
  HongKongDollar_HKD: 7.83,
  IndonesianRupiah_IDR: 15887.75,
  MalaysianRinggit_MYR: 4.72,
  PakistaniRupee_PKR: 277.54,
  PhilippinePeso_PHP: 56.59,
};
let userInput = await inquirer.prompt([
  {
    type: "list",
    name: "fromCurrency",
    choices: [
      "UnitedStatesDollar_USD",
      "Euro_EUR",
      "JapaneseYen_JPY",
      "BritishPoundSterling_GBP",
      "SwissFranc_CHF",
      "CanadianDollar_CAD",
      "AustralianDollar_AUD",
      "ChineseYuan_CNY",
      "IndianRupee_INR",
      "SouthKoreanWon_KRW",
      "ThaiBaht_THB",
      "HongKongDollar_HKD",
      "IndonesianRupiah_IDR",
      "MalaysianRinggit_MYR",
      "PakistaniRupee_PKR",
      "PhilippinePeso_PHP"
    ],
    message: "Select the currency you want to convert from",
  },
  {
    type: "list",
    name: "toCurrency",
    choices: [
        "UnitedStatesDollar_USD",
        "Euro_EUR",
        "JapaneseYen_JPY",
        "BritishPoundSterling_GBP",
        "SwissFranc_CHF",
        "CanadianDollar_CAD",
        "AustralianDollar_AUD",
        "ChineseYuan_CNY",
        "IndianRupee_INR",
        "SouthKoreanWon_KRW",
        "ThaiBaht_THB",
        "HongKongDollar_HKD",
        "IndonesianRupiah_IDR",
        "MalaysianRinggit_MYR",
        "PakistaniRupee_PKR",
        "PhilippinePeso_PHP"
    ],
    message: "Select the currency you want to convert to",
    
  },
  {
    type: "number",
    name: "amount",
    message: "Enter the amount:",
  }
]);
let fromCurrency = userInput.fromCurrency;
let toCurrency = userInput.toCurrency;
let amount = userInput.amount;
let baseCurrency =  amount / currenciesExchangeRate[fromCurrency]; //this will covert any currency to base currency that is USD.
let convertedCurrency = Math.round (baseCurrency * currenciesExchangeRate[toCurrency]); //this will convert base currency to the desired currency.
console.log(`\nThe converted amount is "${convertedCurrency}"\n`);
