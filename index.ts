#!/usr/bin/env node
import add from "./add.js";
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const prompt= await inquirer.prompt([
  {   type: 'list',
      name: 'operation',
      message: 'Choose an operation:',
      choices: ['Add', 'Subtract', 'Multiply', 'Divide'],
},
{
    type: "number",
    message: "Enter first number:",
    name: "n1",
},
{
    type: "number",
    message: "Enter second number:",
    name: "n2",
},
]
)

 const { n1, n2, operation } = prompt;
 let result1: number;
 switch (operation) {
   case 'Add':
     result1 = add(n1, n2) ;
     break;
   case 'Subtract':
     result1 = n1 - n2;
     break;
   case 'Multiply':
     result1 = n1 * n2;
     break;
   case 'Divide':
     result1 = n1 / n2;
     break;
   default:
     result1 = 0;
 } 
 console.log(`The result is:` +  result1);
 