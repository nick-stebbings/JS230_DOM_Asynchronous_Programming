// Write a JavaScript function that returns the p elements in the DOM represented by this HTML:

function findParas() {
  let bodyNodes = document.childNodes[1].lastChild.childNodes;
  let paras = [];
  for (const node of bodyNodes) {
    if (node.nodeName === "P") {
      paras.push(node);
    }
  }
  return paras;
}

// Write a JavaScript function that adds the class article-text to every <p> tag in this HTML:

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function addClasses() {
  let paras = [];
  walk(document, (node) => {
    if (node.nodeName === "P") {
      paras.push(node);
    }
  });
  paras.forEach((para) => {
    para.classList.add("article-text");
  });
}

// Using this task breakdown, rewrite the solution to the first problem. The core of your solution should be a function named getElementsByTagName that returns an array of all elements with a given tag name. You should then add the CSS class article-text to each paragraph in the array.
function getElementsByTagName(tagName, callback) {
  let elements = [];
  walk(document, (node) => {
    if (node.nodeName.toLowerCase() === tagName) {
      elements.push(node);
    }
  });
  return elements;
}
getElementsByTagName("p").forEach((para) => {
  para.classList.add("article-text");
});
