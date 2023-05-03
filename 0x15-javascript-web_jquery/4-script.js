const header = $('header');
const toggleDiv = $('div#toggle_header');

function toggleClassElement(){
    header.toggleClass('red');
    header.toggleClass('green');
};

toggleDiv.on('click', toggleClassElement);
    
