const readlineSync = require("readline-sync");

const annualSalary = readlineSync.question("\nAnnual salary: ");

const retirement = 0.07; 
const federal = 0.157; 
const state = 0.0447;
const socialSecurity = 0.062;
const medicare = 0.0145;

const salary = annualSalary - ((annualSalary*retirement) + (annualSalary*federal) + (annualSalary*state) + (annualSalary*socialSecurity) + (annualSalary*medicare));

let biWeekly = salary /24; 

biWeekly= biWeekly.toLocaleString("en", { style: currency, currency: USD});

console.log("Your take-home pay each check will be " + biWeekly + "."
