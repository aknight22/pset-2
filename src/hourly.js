const readlineSync = require("readline-sync");

const hourlyWage = readlineSync.question("\nHourly wage: ");

let mondayHours = readlineSync.question("\nMonday: ");
let tuesdayHours = readlineSync.question("Tuesday: ");
let wednesdayHours = readlineSync.question("Wednesday: ");
let thursdayHours = readlineSync.question("Thursday: ");
let fridayHours = readlineSync.question("Friday: ");
let saturdayHours = readlineSync.question("Saturday: ");
let sundayHours = readlineSync.question("Sunday: ");

let mondayPay = mondayHours * hourlyWage;
let tuesdayPay = tuesdayHours * hourlyWage;
let wednesdayPay = wednesdayHours * hourlyWage;
let thursdayPay = thursdayHours * hourlyWage;
let fridayPay = fridayHours * hourlyWage;
let saturdayPay = saturdayHours * hourlyWage;
let sundayPay = sundayHours * hourlyWage;

let weekPay = mondayPay+tuesdayPay+wednesdayPay+thursdayPay+fridayPay+saturdayPay+sundayPay;
weekPay = weekPay.toLocaleString("en", { style: "currency", currency: "USD"});
console.log("\nYou'll make " + weekPay + " this week.")
