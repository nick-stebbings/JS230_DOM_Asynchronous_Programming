document.querySelector("html").addEventListener("click", (e) => {
  if (event.target !== document.querySelector("#container")) {
    document.querySelector("#container").style = "display: none";
  }
});

document.querySelector("#container").addEventListener("click", (event) => {
  // event.stopPropagation();
});
