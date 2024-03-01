function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const input = document.querySelector('input');
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  const numberOfDivs = parseInt(input.value);
  if (!isNaN(numberOfDivs) && numberOfDivs >= 1 && numberOfDivs <= 100) {
    destroyBoxes();
    createBoxes(numberOfDivs);
    input.value = "";
  }
});

function createBoxes(amount) {
  boxes.innerHTML = "";
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = `<div style="width: ${boxSize}px; height: ${boxSize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxSize += 10;
  }
}

buttonDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
}