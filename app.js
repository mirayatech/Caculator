// SELECT ALL OF THE Buttons
const btn = document.querySelectorAll("input[type='button']");
const textField = document.querySelector(".textField");

// ADD TEH EVENT TO EVERY BUTTON
btn.forEach((button) => button.addEventListener("click", getTheValue));
// Fuction

function getTheValue() {
  let value = this.value;

  if (value !== "AC" && value !== "ß" && value !== "=") {
    textField.value = textField.value + value;
  }

  if (value == "=") {
    textField.value = eval(textField.value);
  }

  if (value == "AC") {
    textField.value = "";
  }

  if (value == "ß") {
    let length = textField.value;
    textField.value = length.slice(0, -1);
  }
}
