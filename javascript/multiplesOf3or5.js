// Multiples of 3 or 5
// Return 0 when number is negative
// Return the sum of unique multiples of 3 or 5 that occur between 0 and number (exclusive)

function solution(number){
  let sum = 0;
  if (number <= 2) return 0;
  for (let n = number - 1; n > 2; n--) {
    if (n % 3 === 0 || n % 5 === 0) {
      sum += n;
    }
  }
  return sum;
}
