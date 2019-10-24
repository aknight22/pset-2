const readlineSync = require("readline-sync");

const hwWeight = .15;

const quizWeight = .35;

const testWeight = .50;

const hw1 = readlineSync.question("\nEnter three homework grades.\n");
const hw2 = readlineSync.question();
const hw3 = readlineSync.question();

const q1 = readlineSync.question("\nEnter three quiz grades.\n");
const q2 = readlineSync.question();
const q3 = readlineSync.question();

const t1 = readlineSync.question("\nEnter three test grades.\n");
const t2 = readlineSync.question();
const t3 = readlineSync.question();

const hwGrade = (hw1*0.15)+(hw2*0.15)+(hw3*0.15);
const quizGrade = (q1*0.35)+(q2*0.35)+(q3*0.35);
const testGrade = (t1*0.5)+(t2*0.5)+(t3*0.5);
let overallGrade =(hwGrade + quizGrade + testGrade)/3;
overallGrade = overallGrade.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYour marking period grade is " + overallGrade + "%.");
