const valueElem = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action = "decrement"]');
const incrementButton = document.querySelector('[data-action = "increment"]');

let counterValue = 0;

decrementButton.addEventListener("click", (e) => {
  counterValue--;
  valueElem.textContent = counterValue;
});

incrementButton.addEventListener("click", (e) => {
  counterValue++;
  valueElem.textContent = counterValue;
});
