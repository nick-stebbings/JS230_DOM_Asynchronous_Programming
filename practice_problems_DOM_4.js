// Write some JavaScript code to retrieve a word count for each h2 heading on the page.

Array.from(document.querySelectorAll("h2")).forEach((heading) => {
  console.log(heading.textContent.split(" ").length);
});

// Use three different DOM methods to retrieve a reference to the div element that contains the table of contents.
document.getElementById("toc");
document.querySelector("#toc");
document.querySelectorAll(".toc")[0];

Array.from(document.querySelectorAll("#toc a")).forEach((el, i) => {
  if (i % 2 !== 0) {
    Array.from(el.querySelectorAll("span")).forEach(
      (tag) => (tag.style.color = "green")
    );
  }
});

Array.from(document.querySelectorAll(".thumbcaption")).reduce(function (
  coll,
  caption
) {
  coll.push(caption.textContent.trim());
  return coll;
},
[]);

// Write JavaScript code that extracts the classification of animals from the web page and logs an Object that uses the ranks as keys and the groups as values. You may assume the taxonomic ranks to use as keys is provided for you as an array.

function logTaxonomy(taxonomicGroupings) {
  let groupings = {};
  let tableRows = document.querySelectorAll(".infobox.biota tbody tr");
  taxonomicGroupings.forEach((group) => {
    let foundRow = Array.from(tableRows).find((row) =>
      row.firstElementChild.textContent.includes(group)
    );
    groupings[group] = foundRow.lastElementChild.textContent;
  });
  console.log(groupings);
}
