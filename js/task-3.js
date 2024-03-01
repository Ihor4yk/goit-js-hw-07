const userName = document.querySelector("#name-input");
const outName = document.querySelector("#name-output");

userName.addEventListener("input", handleInput);
function handleInput(event) {
  if (event.currentTargen.value.trim() === "") {
    outName.textContent = "Anonymous";
  } else {
    event.currentTargen.value.trim();
  }
}