import 'whatwg-fetch';
import NetflixResultsView from './views/netflix-results';


// getting api data
const programmingEl = document.querySelector('.programming');
const input = document.querySelector('.search__title');
const result = document.querySelector('.search__result');
const searchBtn = document.querySelector('.search-form__btn');

const apiUrl = 'http://netflixroulette.net/api/api.php';
const uv = new NetflixResultsView(programmingEl, {});

function searchProgramming(content) {
  fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
  .then((response) => response.json())
  .then((data) => {
    const programming = data;
    uv.model = programming;
    uv.render();
  });
}


searchForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
});
