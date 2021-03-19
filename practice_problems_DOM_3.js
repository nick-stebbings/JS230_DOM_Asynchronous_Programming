// Update the answer to question 3 of problem group 1 to use the document.getElementsByTagName method:

Array.from(document.getElementsByTagName("p")).forEach((para) => {
  para.classList.add("article-text");
});

// Update the code from Problem 1 to add the article-text class to paragraphs inside <div class="intro">, and nowhere else.

Array.from(document.getElementsByClassName("intro")).forEach((introDiv) => {
  Array.from(introDiv.getElementsByTagName("p")).forEach((tag) => {
    tag.classList.add("article-text");
  });
});
