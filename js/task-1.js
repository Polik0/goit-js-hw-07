const categories = document.querySelectorAll("#categories");
const categoryItems = document.querySelectorAll(".item");

console.log("У списку", categoryItems.length, "категорії");
categoryItems.forEach((item) => {
  console.log("Категорія:", item.querySelector("h2").textContent);
  console.log("Кількість елементів:", item.querySelectorAll("li").length);
});
