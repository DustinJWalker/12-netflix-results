import 'whatwg-fetch';
import NetflixResultsView from './views/netflix-results';


// getting api data
const programmingEl = document.querySelector('.programming');
const input = document.querySelector('.search__title');
const result = document.querySelector('.search__result');
const seachBtn = document.querySelector('.search-form__btn');

const uv = new NetflixResultsView(programmingEl, {});

function search(show_title) {
  fetch(`http://netflixroulette.net/api/api.php?title=${show_title}`)
.then((result) => result.json())
.then((data) => {
  const programming = data;
  uv.model = programming;
  uv.render();
});
}

searchForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  search(input.value);
});
