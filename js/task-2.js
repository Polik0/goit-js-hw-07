const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

function setImages(ingredients) {
  let finalHtml = "";

  ingredients.forEach((ingredient) => {
    const newIngredientHtml = `
      <li>
        ${ingredient}
      </li>`;

    finalHtml += newIngredientHtml;
  });

  ingredientsList.insertAdjacentHTML("beforeend", finalHtml);
}

setImages(ingredients);
