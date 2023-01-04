function sumTwoSmallestNumbers(numbers) {  
  const n = numbers.sort((a, b) => a - b);
  return n[0] + n[1];
}
