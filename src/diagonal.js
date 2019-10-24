const readlineSync = require("readline-sync");

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");
let diagonal = ((width * width) + (length * length));
diagonal = Math.sqrt(diagonal);
diagonal = diagonal.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + diagonal + " inch(es).");
