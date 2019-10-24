const readlineSync = require("readline-sync");

const centimetersPerInch = 2.54;

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");

let widthInCentimeters = width * centimetersPerInch;
let lengthInCentimeters = length * centimetersPerInch
let perimeter = (lengthInCentimeters + widthInCentimeters) * 2;
perimeter = perimeter.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits:2});

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + perimeter + " centimeter(s).");
