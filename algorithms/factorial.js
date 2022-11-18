// Problem
// Given an integer "n", find the factorial of that integer.
// In mathematics, the factorial of a non-negative integer "n", denoted n!, is the product of all positve integers less than or equal to "n".
// Fatorial of zero is 1.
// Fatorial(4) = 4*3*2*1 = 24
// Fatorial(5) = 5*4*3*2*1 = 120

function factorial(n) {
  let factoNum = 1;
  for (let i = 2; i <= n; i++) {
    factoNum = factoNum * i;
  }
  return factoNum;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
