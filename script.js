const img = document.querySelector('img');
const form = document.querySelector('.search-container');
var searchBar = document.querySelector('#search-field');

function getSearch(event) {
  event.preventDefault();
  const query = searchBar.value;

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
