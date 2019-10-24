const readlineSync = require("readline-sync");

const CM_PER_INCH = 2.54;

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");

let widthInCentimeters = width * CM_PER_INCH;
let lengthInCentimeters = length * CM_PER_INCH
let perimeter = (lengthInCentimeters + widthInCentimeters) * 2;
perimeter = perimeter.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits:2});

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + perimeter + " centimeter(s).");
