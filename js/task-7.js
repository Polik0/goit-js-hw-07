const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", () => {
  const rangeValue = range.value;

  text.style.fontSize = rangeValue + "px";
});
