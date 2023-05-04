
const url = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';
const charDiv = $('div#character')

const charName = (url) => {
  $.get(url, (data, textStatus) => {
    if (textStatus === 'success')
      charDiv.text(data.name);
  })
};

charName(url);
