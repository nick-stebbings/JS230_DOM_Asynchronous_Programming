document.addEventListener("DOMContentLoaded", () => {
  let mainSection = document.querySelector("main");
  let subSection = document.getElementById("sub");
  mainSection.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("This is the MAIN section");
  });
  subSection.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    event.stopPropagation();
    alert("This is the SUB section");
  });
});
