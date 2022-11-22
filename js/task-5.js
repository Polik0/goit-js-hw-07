const inputName = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

inputName.addEventListener("input", (e) => {
  if (e.target.value === "") {
    userName.textContent = "незнайомець";
    return;
  }
  userName.textContent = e.target.value;
});
