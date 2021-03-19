// Write out the raw text of the HTTP request the last example above will send to the server.

/* POST /books HTTP/1.1
Host: ls-230-book-catalog.herokuapp.com
Content-Type: application/json; charset=utf-8
Accept: /*/
// { 'title': 'Eloquent JavaScript', 'author': 'Marijn Haverbeke' }

document.addEventListener("DOMContentLoaded", () => {
  const request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://ls-230-web-store-demo.herokuapp.com/v1/products"
  );
  request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  request.setRequestHeader("Authorization", "token AUTH_TOKEN");

  data = JSON.Stringify({ name: "Tippex", price: 100, sku: "redp1001" });

  request.addEventListener("error", (event) => {
    console.log("The request could not be completed!");
  });
  request.send(data);
});
