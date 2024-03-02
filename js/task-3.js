const userName = document.querySelector("#name-input");
const outName = document.querySelector("#name-output");

userName.addEventListener("input", handleInput);
function handleInput(event) {
  if (event.currentTarget.value.trim() === "") {
    console.log(outName.textContent = "Anonymous");
  } else {
    console.log(event.currentTarget.value.trim());
  }
}
