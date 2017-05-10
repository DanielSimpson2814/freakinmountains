$(document).ready(function(){

//NAV SLIDE [hamburger trigger]
  $(".toggle-menu").on("click", function(e){

    $(this).toggleClass("toggle-slider");
    $(".sidebar-menu").toggleClass("menu-slider");
    e.stopPropagation();
  })


//DROP MENU
  $("ul.nav-list li.service").on("click", function(e){
    //e.preventDefault();
    // e.stopPropagation();
    $(this).children("ul").slideToggle(500).css("display", "block");

  });

// SCROLL COUNTER
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();


  // switch tablet content
  function tabletSwitch (){
    var wWidth = $(window).width();
    var smTablet = document.body.getElementsByClassName("smTablet");
    var mdTablet = document.body.getElementsByClassName("mdTablet");

    if (wWidth < 768){
      $(mdTablet).hide();
      $(smTablet).show();
    } else {
      $(mdTablet).show();
      $(smTablet).hide()
    }
  }
  tabletSwitch();

});


});
