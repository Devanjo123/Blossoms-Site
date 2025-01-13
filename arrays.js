let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let firstAge = ages[0];  // Get the first element
let lastAge = ages[ages.length - 1];  // Get the last element dynamically
let difference = lastAge - firstAge;
console.log(`The difference between the last and first age is: ${difference}`);
ages.push(100);  // Adding a new age (for example, 100)
console.log(`New ages array: ${ages}`);
firstAge = ages[0];  // Get the first element again
lastAge = ages[ages.length - 1];  // Get the last element again
difference = lastAge - firstAge;
console.log(`The new difference between the last and first age is: ${difference}`);
ages.push(100);

// Subtracting again with the updated array
difference = ages[ages.length - 1] - ages[0];
console.log("Updated difference after adding new age:", difference);

// Calculate the average age using a loop
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
  totalAge += ages[i];
}

let averageAge = totalAge / ages.length;  // Calculate the average
console.log("Average age:", averageAge);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Create a new array called nameLengths
let nameLengths = [];

// Loop through the names array and add the length of each name to the nameLengths array
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);  // Push the length of each name into nameLengths
}

console.log("nameLengths array:", nameLengths);



