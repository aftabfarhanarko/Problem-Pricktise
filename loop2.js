// Count down from 5 to 1 using a for loop
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Count down from 5 to 1 using a while loop
let j = 5;
while (j >= 1) {
  console.log(j);
  j--;
}

// Use a nested for loop to print a 3-by-3 number grid
for (let row = 1; row <= 3; row++) {
  let line = "";
  for (let column = 1; column <= 3; column++) {
    line += column + " ";
  }
  console.log(line);
}
