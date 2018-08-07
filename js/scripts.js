$(document).ready(function(){
  $(".clickable1").click(function(){
    $(".clickable1 .term1").fadeToggle();
    $(".clickable1 .def1").fadeToggle();
  });

  $(".clickable2").click(function(){
    $(".clickable2 .term2").fadeToggle();
    $(".clickable2 .def2").fadeToggle();
  });

  $(".clickable3").click(function(){
    $(".clickable3 .term3").fadeToggle();
    $(".clickable3 .def3").fadeToggle();
  })

  $(".clickable4").click(function(){
    $(".clickable4 .term4").fadeToggle();
    $(".clickable4 .def4").fadeToggle();
  })
});
