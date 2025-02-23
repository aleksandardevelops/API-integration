const img = document.querySelector('img');
const form = document.querySelector('.search-container');
var searchBar = document.querySelector('#search-field');

function getSearch(event) {
  event.preventDefault();
  const query = searchBar.value;

  if (query === '') {
    img.style.display = 'none';
  } else {
    img.style.display = 'block'; // Ensure the image is shown when there is input
  }

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=tatC4IzhmeaMqo83blsBNLEJmDj9qnzC&s=${query}`,
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}
form.addEventListener('submit', getSearch);
