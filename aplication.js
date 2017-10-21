


$(document).ready(function() {
  // general settings
    let basic = true;
    let random = false;
    let gray = false;
  //forming function
  $.fn.formiranje = function(dim) {
    basic = true;
    let box = $('<div class="square nova boja"></div>');
    $(this).empty();
    for(let i = 1; i <= dim*dim; i++){
    $(this).prepend(box.clone());}
  //basic function
  if(basic === true){
    $('.square').on('mouseenter', function() {
    $(this).css("background-color","black");
  });};

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
  $('#random').on('click', function() {
    basic = false;
    random = true;
    $('.square').on('mouseenter', function() {
      let r = Math.floor(Math.random()*256);
      let g = Math.floor(Math.random()*256);
      let b = Math.floor(Math.random()*256);
      let boja ='rgb('+r+','+g+','+b+')';
      $(this).css('background-color',boja);

  });


  });

});
