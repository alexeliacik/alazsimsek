$(document).ready(function(){
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    e.stopPropagation();
    $(".phoneContent").removeClass("active");
    $(".phoneIcon i").removeClass("fa-times");
    $(".phoneIcon i").addClass("fa-phone");
    $(".whatsappContent").removeClass("active");
    $(".whatsappIcon i").removeClass("fas");
    $(".whatsappIcon i").removeClass("fa-times");
    $(".whatsappIcon i").addClass("fa-whatsapp");
    $("body").toggleClass("active");
  });

  $hamburger.click(function(){
      $(".menu").toggleClass("active");
  });

  $("body,html").click(function(){
    $(".menu").removeClass("active");
    $(".hamburger").removeClass("is-active");
    $(".phoneContent").removeClass("active");
    $(".phoneIcon i").removeClass("fa-times");
    $(".phoneIcon i").addClass("fa-phone");
    $(".whatsappContent").removeClass("active");
    $(".whatsappIcon i").removeClass("fas");
    $(".whatsappIcon i").removeClass("fa-times");
    $(".whatsappIcon i").addClass("fa-whatsapp");
    $("body").removeClass("active");
  });

  $(".menu").click(function(e){
      e.stopPropagation();
  });

  $(".phoneIcon").click(function(e){
    e.stopPropagation();
  });

  $(".phoneContent").click(function(e){
    e.stopPropagation();
  });

  $(".whatsappIcon").click(function(e){
    e.stopPropagation();
  });

  $(".whatsappContent").click(function(e){
    e.stopPropagation();
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      nav: true,
      items: 1,
      loop: true,
      center:true,
      lazyLoad:true,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
    });  
  });


  var responsive = $(window).width();
  if (responsive >= 768) {

    $(".myButton").click( function() {
      $(window).scrollTop(430);
      $(".tedavilerimizNames").css({
        "position" : "fixed",
        "top" : "40px",
        "left" : "0",
        "width": "100%",
        "background-color" : "#fff",
        "z-index" : "1005",
      });
      $(".tedavilerimizContent").css({
        "margin-top" : "93.56px",
      });
      $(".myButton").css({
        "padding" : ".1rem .7rem",
      });
    });
  

    $(window).scroll(function(){
      var height = $(this).scrollTop();
      
      if( height > 130 && height < 460) {
        $("header").css({
          "position" : "fixed",
          "top" : "0",
          "left" : "0",
          "width": "100%",
          "background-color" : "#fff",
          "z-index" : "1005",
        });
        $(".logo").hide();
        $(".menu a").css({
          "padding" : "3px 15px 0px 15px",
        });
        $(".menu a:eq(2)").css({
          "padding" : "3px 20px 0px 20px",
        });
        $("#mainSection").css("margin-top" , "173.84px");
        $(".tedavilerimizMain").css("margin-top" , "173.84px");
        $(".iletisimMain").css("margin-top" , "173.84px");
        $(".galeriMain").css("margin-top" , "173.84px");

      } else if (height >= 460) {
        $("header").css({
          "position" : "fixed",
          "top" : "0",
          "left" : "0",
          "width": "100%",
          "background-color" : "#fff",
          "z-index" : "1005",
        });
        $(".logo").hide();
        $(".menu a").css({
          "padding" : "3px 15px 0px 15px",
        });
        $(".menu a:eq(2)").css({
          "padding" : "3px 20px 0px 20px",
        });
        $("#mainSection").css("margin-top" , "180px");
        $(".tedavilerimizNames").css({
          "position" : "fixed",
          "top" : "40px",
          "left" : "0",
          "width": "100%",
          "background-color" : "#fff",
          "z-index" : "1005",
        });
        $(".tedavilerimizContent").css({
          "margin-top" : "93.56px",
        });
        $(".myButton").css({
          "padding" : ".1rem .7rem",
        });
      } else {
        $(".myButton").css({
          "padding" : ".4rem .7rem",
        });
        $(".tedavilerimizContent").css({
          "margin-top" : "0",
        });
        $(".tedavilerimizNames").css({
          "position" : "inherit",
        });
        $(".logo").show();
        $("header").css({
          "position" : "inherit",
          "background-color" : "#fff",
        });
        $(".menu a").css({
          "padding" : "10px 10px 5px 10px",
        });

        $(".menu a:eq(2)").css({
          "padding" : "10px 20px 5px 20px",
        });

        $("#mainSection").css("margin-top" , "0");
        $(".tedavilerimizMain").css("margin-top" , "0");
        $(".iletisimMain").css("margin-top" , "0");
        $(".galeriMain").css("margin-top" , "0");
      }
    });
  }

  
  $(".tedavilerimizContent div").hide();
  $(".tedavilerimizContent div:eq(0)").show();

  $(".myButton").click(function(){

    $('.myButton').removeClass('active');
    $(this).addClass('active');

    var indis = $(this).index();
    $(".tedavilerimizContent div").hide();
    $(".tedavilerimizContent div:eq("+ indis +")").show();
  });

  $(".phoneIcon").click(function(){
    $(".phoneIcon i").toggleClass("fa-phone fa-times");
    $(".phoneIcon i").toggleClass("active");
    $(".phoneContent").toggleClass("active");
    $(".phoneContent a").toggleClass("active");
    $(".whatsappContent").removeClass("active");
    $(".whatsappIcon i").removeClass("fas");
    $(".whatsappIcon i").removeClass("fa-times");
    $(".whatsappIcon i").addClass("fa-whatsapp");
    $(".menu").removeClass("active");
    $(".hamburger").removeClass("is-active");
    $("body").removeClass("active");
  });

  $(".whatsappIcon").click(function(){
    $(".whatsappIcon i").toggleClass("fa-whatsapp fa-times");
    $(".whatsappIcon i").toggleClass("fas");
    $(".whatsappIcon i").toggleClass("active");
    $(".whatsappContent").toggleClass("active");
    $(".whatsappContent a").toggleClass("active");
    $(".phoneContent").removeClass("active");
    $(".phoneIcon i").removeClass("fa-times");
    $(".phoneIcon i").addClass("fa-phone");
    $("body").removeClass("active");
  });
});


  ScrollReveal().reveal('.wrapper1', { 
    delay: 800, 
    opacity:'0',
    origin:'right',
    duration:'1000',
    distance:'350px',
   });

  ScrollReveal().reveal('.wrapper2', { 
    delay: 1300,
    opacity:'0',
    origin:'right',
    duration:'1000',
    distance:'350px',
   });

  ScrollReveal().reveal('.wrapper3', { 
    delay: 1800,
    opacity:'0',
    origin:'right',
    duration:'1000',
    distance:'350px',
   });















