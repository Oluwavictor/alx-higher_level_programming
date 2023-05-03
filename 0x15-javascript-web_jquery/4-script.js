const header = $('.green');
const toggleDiv = $('div#toggle_header');

toggleDiv.on('click', toggle(color){
    if(header.className == "#00FF00" || "green"){
        header.className = "red";
    }else {
        header.className = "green";
    }
}
);
