const text_element = document.querySelector(".theWord--text");
const topic_button = document.querySelector('input[type="button"]');
let link, topic_arr;

let language = document.querySelectorAll('input[name="lang"]');
language = [...language];

const changeTopic = () => {
  let randomTopic = Math.floor(Math.random() * topic_arr.length);
  text_element.innerHTML = topic_arr[randomTopic];
};

const fetchTopic = file => {
  fetch(file)
    .then(data => data.json())
    .then(data => {
      topic_arr = data.words;
      topic_button.value = data.buttonText;
      changeTopic();
      return data;
    })
    .catch(err => console.log(err));
};

const changeLang = () => {
  let language = document.querySelectorAll('input[name="lang"]');
  language = [...language];
  language = language.filter(element => element.checked);
  link = `./languages/${language[0].value}.json`;

  fetchTopic(link);
};

language.forEach(el => {
  el.addEventListener("change", changeLang);
});

topic_button.addEventListener("click", changeTopic);
