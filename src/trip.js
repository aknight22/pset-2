const readlineSync = require ("readline-sync"); 

const students = readlineSync.question("\nStudents: ");
const teachers = readlineSync.question("Teachers: "); 
const capacity = readlineSync.question("Bus capacity: "); 

let passengers = students + teachers;
let buses = math.floor((passengers/capacity)+1);
let PassengersRemainder = passenger % capacity;

console.log("\n" + buses + "bus(es) is (are) needed, with " + PassengersRemainder + " passenger(s) on the last bus.");
