const displayOutput = document.getElementById("displayOutput");
// const clearAll = document.getElementById("allClear");
// const removeOne = document.getElementById("removeOneDigit");
// const modulo = document.getElementById("modulo");
// const divide = document.getElementById("divide");
// const multiplication = document.getElementById("multiplication");
// const subtraction = document.getElementById("subtraction");
// const addition = document.getElementById("addition");
// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const four = document.getElementById("four");
// const five = document.getElementById("five");
// const six = document.getElementById("six");
// const seven = document.getElementById("seven");
// const eight = document.getElementById("eight");
// const nine = document.getElementById("nine");
// const zero = document.getElementById("zero");
// const point = document.getElementById("point");
const button = document.getElementsByClassName("btn");
for (let item of button) {
  item.addEventListener("click", (event) => {
    let btnInnerText = event.target.innerText;
    if (btnInnerText === "AC") {
      displayOutput.innerText = "0";
    } else if (btnInnerText === "X") {
      if (displayOutput.innerText.length > 1)
        displayOutput.innerText = displayOutput.innerText.slice(0, -1);
      else displayOutput.innerText = "0";
    } else if (btnInnerText === "=") {
      displayOutput.innerText = eval(displayOutput.innerText);
    } else {
      if (displayOutput.innerText === "0") {
        if (
          btnInnerText === "*" ||
          btnInnerText === "/" ||
          btnInnerText === "%"
        ) {
          alert("Invalid Inputs!");
        } else {
          displayOutput.innerText = btnInnerText;
        }
      } else displayOutput.innerText += btnInnerText;
    }
  });
}
