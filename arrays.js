let ages = [3, 9, 23, 64, 2, 8, 28.93];
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
let sum = 0;
for (let i = 0; i < ages.length; i++) 
{

  sum += ages[i];
  
}
let averageAge = sum / ages.length;
console.log(`The average age is: ${averageAge}`)
