
const calcBtn = document.getElementById("calc");

calcBtn.addEventListener("click", calculateCombination);


function calculateCombination() {
    event.preventDefault();
    const n = parseInt(document.getElementById("n").value);
    const r = parseInt(document.getElementById("r").value);
    const result = combination(n, r);
    document.getElementById("answer").innerHTML = `C(${n},${r}) = ${result}`;
}

function combination(n, r) {
    if(r <= n){
        return factorial(n) / (factorial(r) * factorial(n - r));
    }
}
  
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

