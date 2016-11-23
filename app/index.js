import 'whatwg-fetch';
import NetflixResultsView from './views/netflix-results';


// getting api data
const programmingEl = document.querySelector('.programming');
const input = document.querySelector('.search-form__input');
const form = document.querySelector('.search-form');

// const apiUrl = 'http://netflixroulette.net/api/api.php';
const uv = new NetflixResultsView(programmingEl, {});

function searchProgramming(show) {
  fetch(`http://netflixroulette.net/api/api.php?title=${show}`)
    .then((response) => response.json())
    .then((data) => {
      const programming = data;
      uv.model = programming;
      uv.render();
    });
}

searchProgramming('Attack%20on%20titan');

form.addEventListener('submit', (ev) => {
  // Stop the form from reloading the page
  ev.preventDefault();

  // Make fetch request
  searchProgramming(input.value);
});
