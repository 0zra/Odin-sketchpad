//osnova kutija

//formiranje
$.fn.formiranje = function(dim) {
  let box = $('<div class="square nova"></div>');
  $(this).empty();
  for(let i = 1; i <= dim*dim; i++){
  $(this).prepend(box.clone());}
//osnovna f-ja
  $('.square').on('mouseenter', function() {
  $(this).addClass('visited');
  });
};


$(document).ready(function() {

// formiranje tablice prvi put
  $('#conteiner').formiranje(16);
  // pocetne postavke
    let basic = true;
    let random = false;
    let gray = false;

//nova tablica
  $('#clear').on('click', function() {
    var dimenzija = prompt("Dimensions of the grid (default 16 x 16):", "16");
    let dimenzija_kutije=Math.floor(640/Number(dimenzija))+'px';
    let tekst = "<style type='text/css'> .nova{ width:"+dimenzija_kutije+" !important; height:"+dimenzija_kutije+" !important;} </style>";
    //alert(tekst);
    $(tekst).appendTo("head");
    let box = $('<div class="square nova"></div>');

      $('#conteiner').formiranje(Number(dimenzija));
  });

});
