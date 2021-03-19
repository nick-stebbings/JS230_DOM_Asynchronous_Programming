let head = document.querySelector("body > header");
document.body.insertAdjacentElement("afterbegin", head);
let h1 = document.querySelector("main > h1");
head.insertAdjacentElement("afterbegin", h1);

let article = document.querySelector("#content > article");
let [chinStick, babyMop] = Array.from(
  document.querySelectorAll("#content figure")
);
let [babyMopImg, chinStickImg] = Array.from(
  document.querySelectorAll("#content figure img")
);
chinStick.insertAdjacentElement("afterbegin", chinStickImg);
babyMop.insertAdjacentElement("afterbegin", babyMopImg);

article.appendChild(chinStick);
article.appendChild(babyMop);
