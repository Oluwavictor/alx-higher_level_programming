const header = $('header');
const updateHeaderText = $('div#update_header');

const changeHeaderText = () => header.text('New Header!!!');
updateHeaderText.on('click', changeHeaderText);

