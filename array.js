let array_1 = [1234,2234,4,5,6,7,67,89,34,235,35,235,25,2,5,35,34,5,3446,45,7,65,7];

console.log(array_1.length);

let array_2  = [...array_1,888,888,444,21222,1,1,2,32,4,23,423,4,23,4];
// console.log(array_2.length);

const array_3 =  array_1.concat(array_2);
// console.log(array_3);



// let idx =  array_1.findIndex((item) =>  {
//     if(item == 89){
//         console.log(" Value", item);

//     }else{ console.log(
//         "No  Avabile Value Right Now"
//     );}      
// })

// console.log(array_1.indexOf(89));

const  [q,w,...ok] = array_1;
// console.log(q,w,ok);

 
// // Import the built-in readline module
// const readline = require("readline");

// // Create an interface for input and output streams
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Prompt the user with a question
// rl.question("What is your name? ", (userInput) => {
//   // OUTPUT: Print the response to the terminal
//   console.log(`Hello, ${userInput}! Welcome to the VS Code terminal.`);

//   // Close the interface so the program exits
//   rl.close();
// });



// Interview Qustion
const first = {
    age:535
}


const second = {
    age:5346456455
}

const thired = {
    ...first,
    ...second
}
console.log(thired);

const studentList = [
    { name: "Ayesha", marks: 85 },
    { name: "Rahim", marks: 92 },
    { name: "Karim", marks: 78 },
];

const studentList1 = studentList.sort((a, b) => b.marks - a.marks);
console.log(studentList1);