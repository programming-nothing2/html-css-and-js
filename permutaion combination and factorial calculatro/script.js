function calculatePermutation() {
    const n = parseInt(document.getElementById("n").value);
    const r = parseInt(document.getElementById("r").value);
    const result = permutation(n, r);
    document.getElementById("result").innerHTML = `Permutation: ${result}`;
  }
  
  function calculateCombination() {
    const n = parseInt(document.getElementById("n").value);
    const r = parseInt(document.getElementById("r").value);
    const result = combination(n, r);
    document.getElementById("result").innerHTML = `Combination: ${result}`;
  }
  
  function calculateFactorial() {
    const n = parseInt(document.getElementById("n").value);
    const result = factorial(n);
    document.getElementById("result").innerHTML = `Factorial: ${result}`;
  }
  
  function permutation(n, r) {
    return factorial(n) / factorial(n - r);
  }
  
  function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
  }
  
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }