const jokeEl = document.querySelector('#joke');
const btnEl = document.querySelector('#btn');
const url =
  'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let getjoke = () => {
  jokeEl.classList.remove('fade');
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeEl.textContent = `${item.joke}`;
      jokeEl.classList.add('fade');
    });
};
btnEl.addEventListener('click', getjoke);
getjoke();
