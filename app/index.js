import 'whatwg-fetch';
import NetflixResultsView from './views/netflix-results';


// getting api data
const programmingEl = document.querySelector('.programming');
const input = document.querySelector('.search__title');
const uv = new NetflixResultsView(programmingEl, {});
fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
.then((result) => result.json())
.then((data) => {
  const programming = data;
  uv.model = programming;
  uv.render();
});
