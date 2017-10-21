


$(document).ready(function() {
  //forming function
  $.fn.formiranje = function(dim) {
    basic = true;
    let box = $('<div class="square nova boja" data-c="256"></div>');
    $(this).empty();
    for(let i = 1; i <= dim*dim; i++){
    $(this).prepend(box.clone());}
  //basic function

    $('.square').on('mouseenter', function() {
    $(this).css("background-color","black");
  });

  };

// forming the grid for the first time
  $('#conteiner').formiranje(16);

//new grid
  $('#clear').on('click', function() {

    var dimenzija = prompt("Dimensions of the grid (default 16 x 16):", "16"); //treba osigurat!
    let dimenzija_kutije=640/Number(dimenzija)+'px';
    let tekst = "<style type='text/css'> .nova{ width:"+dimenzija_kutije+" !important; height:"+dimenzija_kutije+" !important;} </style>";
    $(tekst).appendTo("head");
    $('#conteiner').formiranje(Number(dimenzija));
  });
//random option
  $('#random').on('click', function() {

    $('.square').on('mouseenter', function() {
      let r = Math.floor(Math.random()*256);
      let g = Math.floor(Math.random()*256);
      let b = Math.floor(Math.random()*256);
      let boja ='rgb('+r+','+g+','+b+')';
      $(this).css('background-color',boja);

      });
  });
// "50" shades of gray option
  $('#gray').on('click', function() {

    $('.square').on('mouseenter', function() {
        let c = +$(this).data('c')
        c=c-20;
        let zapis = ''+c+'';
        $(this).data('c', zapis);
        let b = 'rgb('+c+','+c+','+c+')';
        $(this).css('background-color',b);


      });

  });

});
