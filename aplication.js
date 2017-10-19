$(document).ready(function() {
  let box = $('<div class="square"></div>');


    $('#conteiner').prepend(box);
    for(let i = 1; i < 256; i++){
    $('#conteiner').prepend(box.clone());
    }





});
