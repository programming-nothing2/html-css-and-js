
const calcBtn = document.getElementById("calc");

calcBtn.addEventListener("click", calculateFactorial);

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }


  function calculateFactorial() {
    event.preventDefault();
    const n = parseInt(document.getElementById("n").value);
    const result = factorial(n);
    document.getElementById("answer").innerHTML = `${n}! = ${result}`;
  }