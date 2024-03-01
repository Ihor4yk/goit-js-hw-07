function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBoxes);

buttonDestroy.addEventListener("click", destroyBoxes);


function createBoxes(amount) {
  boxes.innerHTML = "";
  boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}



// const input = document.querySelector("input");
// input.style = `border: 1px solid #808080;
//               border-radius: 8px;
//               width: 150px;
//               height: 40px;`;
// const buttonCreate = document.querySelector('button[data-create]');
// buttonCreate.style = `border-radius: 8px;
//               border: none;
//               width: 120px;
//               height: 40px;
//               background-color: #4E75FF;
//               font-family: "Montserrat", sans-serif;
//               font-weight: 500;
//               font-size: 16px;
//               line-height: 1.5;
//               letter-spacing: 0.04em;
//               color: #fff;`;
// const buttonDestroy = document.querySelector('button[data-destroy]');
// buttonDestroy.style = `border-radius: 8px;
//               border: none;
//               width: 120px;
//               height: 40px;
//               background-color: #FF4E4E;
//               font-family: "Montserrat", sans-serif;
//               font-weight: 500;
//               font-size: 16px;
//               line-height: 1.5;
//               letter-spacing: 0.04em;
//               color: #fff;`;
// input.addEventListener("input", (event) => {
// const numberInput = event.currentTarget.value;
// buttonCreate.addEventListener("click", () => {
//     if (numberInput <= 100 && numberInput >= 1) {
//       boxes.innerHTML = "";
//       let boxsize = 30;
//     for (let i = 0; i < numberInput; i++) {
//       let newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
//       boxes.insertAdjacentHTML("beforeend", newDiv);
//       boxsize += 10;
//     }
//   } else {
//   // alert('Введіть додатне число від 1 до 100');
//   boxes.innerHTML = "";
// }
//   });
// });
// buttonDestroy.addEventListener("click", () => {
//   boxes.innerHTML = "";
//  })