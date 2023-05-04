
const ul_list = $('ul#list_movies');
const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';

const fetchListTitle = (movie) => {
  let listItem = $('<li></li>').text(movie.title);
  listItem.appendTo(ul_list);
};
const allMovies = (url) => {
  $.get(url, (data, textStatus) => {
    if (textStatus === 'success')
      data.results.map(fetchListTitle)
  })
};

allMovies(url);
