// Write some JavaScript code that updates the options on one dropdown when the selection in the other dropdown changes. For instance, when the user chooses an option under Classifications, the items in the Animals dropdown should change accordingly. Use the lookup tables below to see which animals and classifications go together.

document.addEventListener("DOMContentLoaded", () => {
  let select1 = document.getElementById("animal-classifications");
  let select2 = document.getElementById("animals");
  let clearBtn = document.getElementById("clear");

  let original1 = [
    "Classifications",
    "Vertebrate",
    "Warm-blooded",
    "Cold-blooded",
    "Mammal",
    "Bird",
  ];
  let original2 = ["Animals", "Bear", "Turtle", "Whale", "Salmon", "Ostrich"];

  function setOptionsList(array, element = select2) {
    return array
      .map((item) => new Option(item))
      .forEach((el, i) => {
        element.options[i] = el;
      });
  }

  select1.onchange = function (event) {
    select2.options.length = 0;
    switch (event.target.value) {
      case "Vertebrate":
        setOptionsList(["Bear", "Turtle", "Whale", "Salmon", "Ostrich"]);
        break;
      case "Warm-blooded":
        setOptionsList(["Bear", "Whale", "Ostrich"]);
        break;
      case "Cold-blooded":
        setOptionsList(["Salmon", "Turtle"]);
        break;
      case "Mammal":
        setOptionsList(["Bear", "Whale"]);
        break;
      case "Bird":
        setOptionsList(["Ostrich"]);
        break;
    }
  };
  select2.onchange = function (event) {
    if (event.target !== select2) {
    }
    select1.options.length = 0;
    switch (event.target.value) {
      case "Bear":
        setOptionsList(["Vertebrate", "Warm-blooded", "Mammal"], select1);
        break;
      case "Turtle":
        setOptionsList(["Vertebrate", "Cold-blooded"], select1);
      case "Whale":
        setOptionsList(["Vertebrate", "Warm-blooded", "Mammal"], select1);
        break;
      case "Salmon":
        setOptionsList(["Vertebrate", "Cold-blooded"], select1);
        break;
      case "Ostrich":
        setOptionsList(["Vertebrate", "Warm-blooded", "Bird"], select1);
        break;
    }
  };

  clearBtn.onclick = function (e) {
    e.preventDefault();
    setOptionsList(original1, select1);
    setOptionsList(original2, select2);
  };
});
