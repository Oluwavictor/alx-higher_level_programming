const addElementToList = () => $('ul.my_list').append($('<li></li>').text('Item'));
const removeElementFromList = () => $('ul.my_list li:last').remove();
const clearList = () => $('ul.my_list').empty();

$('document').ready(() => {
  $('div#add_item').click(addElementToList);
  $('div#remove_item').click(removeElementFromList);
  $('div#clear_list').click(clearList);
});
