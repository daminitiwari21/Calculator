const display = document.getElementById("display");

function calc(event) {
  const value = event.target.value;
  if (value === "=") {
    display.value = eval(display.value);
  } else if (value === "C") {
    display.value = 0;
  } else if (display.value === "0") {
    display.value = event.target.value;
  } else {
    display.value += event.target.value;
  }
}
