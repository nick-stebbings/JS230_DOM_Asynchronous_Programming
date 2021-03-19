function walkUpwards(nodeId, cb) {
  let currentNode = document.getElementById(nodeId) || document.body;
  if (currentNode.nodeName !== "BODY") {
    cb(currentNode);
    walkUpwards(currentNode.parentNode.getAttribute("id"), cb);
  }
}

function domTracer(nodeId) {
  let result = [];
  let siblingAdder = function (currentNode) {
    let siblings = [...currentNode.parentNode.children];
    siblings = siblings.filter((node) => node.nodeName !== "SCRIPT");
    result.push(siblings.map((node) => node.nodeName));
  };

  walkUpwards(nodeId, siblingAdder);
  return result;
}
/* 
> domTreeTracer(1);
= [["ARTICLE"]]
> domTreeTracer(2);
= [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
> domTreeTracer(22);
= [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]] */
