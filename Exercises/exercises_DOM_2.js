// FE
function childNodes(nodeId) {
  let divInQuestion = document.getElementById(nodeId);
  let children = divInQuestion.childNodes;
  if (children.length !== 0) {
    let ids = [];
    for (let i = 0; i < children.length; i++) {
      if (children[i].nodeType == Node.ELEMENT_NODE) {
        ids.push(children[i].getAttribute("id"));
      } else {
        ids.push("#text");
      }
    }
    return ids.reduce(
      (sums, node) => {
        if (node === "#text") {
          return sums;
        } else {
          [direct, indirect] = childNodes(node);
          return [sums[0], [Number(direct) + Number(sums[1])]];
        }
      },
      [[children.length], [0]]
    );
  }
  return [0, 0];
}

console.log(" :>> ", childNodes(1));
console.log(" :>> ", childNodes(2));
console.log(" :>> ", childNodes(3));
console.log(" :>> ", childNodes(4));
console.log(" :>> ", childNodes(5));
console.log(" :>> ", childNodes(6));
console.log(" :>> ", childNodes(7));
console.log(" :>> ", childNodes(8));
console.log(" :>> ", childNodes(9));
