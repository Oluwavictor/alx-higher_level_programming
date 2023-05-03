const header = $('header');
const red_div = $('div#red_header');

changeColor = () => header.css('color', '#FF0000');
red_div.on('click', changeColor);
