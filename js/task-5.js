function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const textSpan = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", handleClick);

function handleClick() {
  body.style.backgroundColor = getRandomHexColor();
  textSpan.textContent = getRandomHexColor();
}
