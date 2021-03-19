let intervalId;

document.addEventListener("DOMContentLoaded", () => {
  let textField = document.querySelector(".text-field");
  function startInterval() {
    intervalId = setInterval(() => {
      textField.classList.toggle("cursor");
    }, 500);
  }

  document.addEventListener("keyup", (event) => {
    let textFocus = document.querySelector(".text-field.focused");
    let contentArea = textFocus.querySelector(".content");
    if (textFocus) {
      if (event.key == "Backspace") {
        contentArea.textContent = contentArea.textContent.replace(/.$/, "");
      } else {
        contentArea.textContent += event.key;
      }
    }
  });
  textField.addEventListener("click", (event) => {
    event.stopPropagation();
    textField.classList.add("focused");
    if (!intervalId) startInterval();
  });
});

document.addEventListener("click", (event) => {
  let textField = document.querySelector(".text-field");
  textField.classList.remove("focused");
  textField.classList.remove("cursor");
  clearInterval(intervalId);
  intervalId = null;
});
