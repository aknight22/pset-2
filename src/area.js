const readlineSync = require("readline-sync");

const MM_PER_INCH = 25.4;

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");

let widthInMillimeters = width * MM_PER_INCH;
let lengthInMillimeters = length * MM_PER_INCH;
let area = widthInMillimeters * lengthInMillimeters;
area = area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + area + " square millimeter(s).");
