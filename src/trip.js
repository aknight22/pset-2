const readlineSync = require ("readline-sync");

const students = Number(readlineSync.question("\nStudents: "));
const teachers = Number(readlineSync.question("Teachers: "));
const capacity = Number(readlineSync.question("Bus capacity: "));

let passengers = students + teachers;
let buses = Math.floor((passengers/capacity)+1);
let passengersRemainder = passengers % capacity;

console.log("\n" + buses + " bus(es) is (are) needed, with " + passengersRemainder + " passenger(s) on the last bus.");
