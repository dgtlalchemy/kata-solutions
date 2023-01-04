// Return the sum of the two smallest numbers in the array
// Array passed in will be > 4 length of positive numbers

function sumTwoSmallestNumbers(numbers) {  
  const n = numbers.sort((a, b) => a - b);
  return n[0] + n[1];
}
