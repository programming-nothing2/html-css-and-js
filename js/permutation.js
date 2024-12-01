
const calcBtn = document.getElementById("calc");

calcBtn.addEventListener("click", calculatePermutation);


function calculatePermutation() {
    event.preventDefault();
    const n = parseInt(document.getElementById("n").value);
    const r = parseInt(document.getElementById("r").value);
    const result = permutation(n, r);
    document.getElementById("answer").innerHTML = `P(${n},${r}) = ${result}`;
}

function permutation(n, r) {
    if(r<=n){
      return factorial(n) / factorial(n - r);
    } 
}

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

