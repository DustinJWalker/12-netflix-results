import 'whatwg-fetch';
import UserView from './views/netflix-results';


// getting api data
const uv = new UserView(doucument.querySelector('.user'), {});
// fetch request
fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
.then((result) => result.json())
.then((data) => {
  const person = data.results[0];
  uv.model = person;
  uv.render();
  document.querySelector('.user__first-name').innerText = person.name.first;
});
