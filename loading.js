const text_element = document.querySelector(".theWord--text");
let length;

fetch("./languages/english.json")
  .then(data => data.json())
  .then(data => {
    length = data.length;
    return data;
  })
  .then(data => {
    let randomTopic = Math.floor(Math.random() * length);
    return data[randomTopic];
  })
  .then(data => {
    text_element.innerHTML = data;
    return data;
  })
  .catch(err => console.log(err));
