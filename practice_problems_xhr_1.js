document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://ls-230-web-store-demo.herokuapp.com/products/1"
    );

    const data = new FormData(form);
    request.addEventListener(
      "load",
      (event) => (document.body.innerHTML = request.response)
    );
    request.setRequestHeader("Authorization", "token AUTH_TOKEN");
    request.send(data);
  });
});
