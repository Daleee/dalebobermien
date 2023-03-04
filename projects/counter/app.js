const increaseButton = document.getElementById("increase");
const resetButton = document.getElementById("reset");
const decreaseButton = document.getElementById("decrease");
const counter = document.getElementById("value");

let count = 0;

increase.addEventListener("click", () => {
  count++;
  counter.innerText = count;
  updateCountColour();
});

reset.addEventListener("click", () => {
  count = 0;
  counter.innerText = count;
  updateCountColour();
});

decrease.addEventListener("click", () => {
  count--;
  counter.innerText = count;
  updateCountColour();
});

function updateCountColour() {
  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}
