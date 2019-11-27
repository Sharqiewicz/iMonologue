const text_element = document.querySelector(".theWord--text");

fetch("./languages/english.json")
  .then(e => e.json())
  .then(e => console.log(e.animals))
  .catch(err => console.log(err));
