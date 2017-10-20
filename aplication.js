let box = $('<div class="square"></div>');
$.fn.formiranje = function(dim) {
  $(this).empty();
  for(let i = 1; i <= dim*dim; i++){
  $(this).prepend(box.clone());}
};
$(document).ready(function() {

// pocetne postavke
  let basic = true;
  let random = false;
  let gray = false;
// formiranje tablice prvi put
  $('#conteiner').formiranje(16);

//nova tablica
  $('#clear').on('click', function() {
      $('#conteiner').formiranje(16);
  });

// provjera koja je opcija ukljucena
  if( basic === true) {
    $('.square').on('mouseenter', function() {
    $(this).addClass('visited');
    });
  };



});
