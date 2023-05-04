const ul_list = $('ul.my_list');
const li_div = $('div#add_item');
const elementText = $('<li>').text('Item');

const appendElement = () => ul_list.append(elementText);

li_div.on('click', appendElement);
