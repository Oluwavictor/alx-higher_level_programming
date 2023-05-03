const header = $('header');
const red_div = $('div#red_header');

putClass = () => header.addClass('red');
red_div.on('click', putClass);
