const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);

const titles = document.querySelectorAll("h2");
titles.forEach(function (title) {
  console.log(`Category: ${title.textContent}`);

const categoriesNames = title.parentElement.querySelectorAll("ul > li");
  console.log(`Elements: ${categoriesNames.length}`);
});