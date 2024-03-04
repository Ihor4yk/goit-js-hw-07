const userName = document.querySelector("#name-input");
const outName = document.querySelector("#name-output");

userName.addEventListener("input", handleInput);
function handleInput(event) {
  const trimmedValue  = event.currentTarget.value.trim();
  outName.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
}
