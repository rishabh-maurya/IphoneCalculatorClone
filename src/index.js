const displayOutput = document.getElementById("displayOutput");
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
