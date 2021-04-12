document.addEventListener("DOMContentLoaded", (e) => {
  const list = document.getElementById("grocery-list");
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const quantity = document.getElementById('quantity');
    const itemName = name.value;
    const itemQuantity = +quantity.value || 1;

    let newItem = document.createElement('li');
    newItem.textContent = `${itemQuantity} ${itemName + (itemQuantity > 1 ? 's' : '')}`;
    list.appendChild(newItem);
    HTMLFormElement.prototype.reset.call(form);
  });
});
