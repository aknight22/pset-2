const width= 48;
const length = 24;
const diameter = 6;

const radius = diameter / 2;
let boardArea = width * length;
const circleArea = Math.PI*(Math.pow(radius,2));
let area = boardArea - circleArea
area = area.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nThe surface area of a standard Cornhole board is "+ area + " square inch(es).");
