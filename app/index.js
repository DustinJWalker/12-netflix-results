import 'whatwg-fetch';
import NetflixResultsView from './views/netflix-results';


// getting api data
const programmingEl = document.querySelector('.programming');
const input = document.querySelector('.search__title');
const result = document.querySelector('.search__result');
const seachBtn = document.querySelector('.search-form__btn');

let apiUrl = 'http://netflixroulette.net/api/api.php';
const uv = new NetflixResultsView(programmingEl, {});
searchForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
});

fetch(`${apiUrl}?title=${input.value}`)
.then((response) => response.json())
.then((data) => {
  const programming = data;
  uv.model = programming;
  uv.render();
});

fetch(`${apiUrl}?title=Attack%20on%20titan`)
  .then((response) => response.json())
  .then((data) => {
    const program = data;
    uv.model = program;
    uv.render();
  });
