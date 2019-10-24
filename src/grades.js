const readlineSync = require("readline-sync");

const HW_WEIGHT = .15;
const QUIZ_WEIGHT = .35;
const TEST_WEIGHT = .50;

const hw1 = readlineSync.question("\nEnter three homework grades.\n");
const hw2 = readlineSync.question();
const hw3 = readlineSync.question();

const q1 = readlineSync.question("\nEnter three quiz grades.\n");
const q2 = readlineSync.question();
const q3 = readlineSync.question();

const t1 = readlineSync.question("\nEnter three test grades.\n");
const t2 = readlineSync.question();
const t3 = readlineSync.question();

const hwGrade = (hw1*HW_WEIGHT)+(hw2*HW_WEIGHT)+(hw3*HW_WEIGHT);
const quizGrade = (q1*QUIZ_WEIGHT)+(q2*QUIZ_WEIGHT)+(q3*QUIZ_WEIGHT);
const testGrade = (t1*TEST_WEIGHT)+(t2*TEST_WEIGHT)+(t3*TEST_WEIGHT);
let overallGrade =(hwGrade + quizGrade + testGrade)/3;
overallGrade = overallGrade.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYour marking period grade is " + overallGrade + "%.");
