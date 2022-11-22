const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("focusout", (e) => {
  if (
    Number(validationInput.getAttribute("data-length")) !==
    e.target.value.length
  ) {
    validationInput.classList.add("invalid");
    return;
  }
  validationInput.classList.remove("invalid");
  validationInput.classList.add("valid");
});
