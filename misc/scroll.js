// JavaScript Document
$( document ).ready(function() {

$(window).scroll(function() {
   if($(window).scrollTop() === 0) {
       $("#navigation>li").css("color","#FFFFFF");
	   $("#dot1").css("color","#D96C29");
   }
      if($(window).scrollTop() >= $("#slide1").height()) {
       $("#navigation>li").css("color","#FFFFFF");
	   $("#dot2").css("color","#D96C29");
   }

      if($(window).scrollTop() >= $("#slide1").height() + $("#slide2").height()) {
       $("#navigation>li").css("color","#FFFFFF");
	   $("#dot3").css("color","#D96C29");
   }
      if($(window).scrollTop() >= $("#slide1").height() + $("#slide2").height() + $("#slide3").height()) {
       $("#navigation>li").css("color","#FFFFFF");
	   $("#dot4").css("color","#D96C29");
   }
      if($(window).scrollTop() >= $("#slide1").height() + $("#slide2").height() + $("#slide3").height() + $("#slide4").height() + $("#slide5").height()) {
       $("#navigation>li").css("color","#FFFFFF");
	   $("#dot5").css("color","#D96C29");
   }
      if($(window).scrollTop() >= $("#slide1").height() + $("#slide2").height() + $("#slide3").height() + $("#slide4").height() + $("#slide5").height() + $("#slide6").height() + $("#slide7").height()) {
       $("#navigation>li").css("color","#FFFFFF");
	   $("#dot6").css("color","#D96C29");
   }
      if($(window).scrollTop() >= $("#slide1").height() + $("#slide2").height() + $("#slide3").height() + $("#slide4").height() + $("#slide5").height() + $("#slide6").height()  + $("#slide7").height() + $("#slide8").height() + $("#slide9").height()) {
       $("#navigation>li").css("color","#FFFFFF");
	   $("#dot7").css("color","#D96C29");
   }
      if($(window).scrollTop()  >= $("#slide1").height() + $("#slide2").height() + $("#slide3").height() + $("#slide4").height() + $("#slide5").height() + $("#slide6").height()  + $("#slide7").height() + $("#slide8").height() + $("#slide9").height() + $("#slide10").height()  + $("#slide11").height()) {
       $("#navigation>li").css("color","#FFFFFF");
	   $("#dot8").css("color","#D96C29");
   }
      if($(window).scrollTop() >= $("#slide1").height() + $("#slide2").height() + $("#slide3").height() + $("#slide4").height() + $("#slide5").height() + $("#slide6").height()  + $("#slide7").height() + $("#slide8").height() + $("#slide9").height() + $("#slide10").height()  + $("#slide11").height() + $("#slide12").height() + $("#slide13").height()) {
       $("#navigation>li").css("color","#FFFFFF");
	   $("#dot9").css("color","#D96C29");
   }
      if($(window).scrollTop()  >= $("#slide1").height() + $("#slide2").height() + $("#slide3").height() + $("#slide4").height() + $("#slide5").height() + $("#slide6").height()  + $("#slide7").height() + $("#slide8").height() + $("#slide9").height() + $("#slide10").height()  + $("#slide11").height() + $("#slide12").height() + $("#slide13").height() + $("#slide14").height() + $("#slide15").height() ) {
       $("#navigation>li").css("color","#FFFFFF");
	   $("#dot10").css("color","#D96C29");
   }
      if($(window).scrollTop() >= $("#slide1").height() + $("#slide2").height() + $("#slide3").height() + $("#slide4").height() + $("#slide5").height() + $("#slide6").height()  + $("#slide7").height() + $("#slide8").height() + $("#slide9").height() + $("#slide10").height()  + $("#slide11").height() + $("#slide12").height() + $("#slide13").height() + $("#slide14").height() + $("#slide15").height() + $("#slide16").height() + $("#slide17").height()) {
       $("#navigation>li").css("color","#FFFFFF");
	   $("#dot11").css("color","#D96C29");
   }
      if($(window).scrollTop() + $(window).height() >= $(document).height()) {
       $("#navigation>li").css("color","#FFFFFF");
	   $("#dot12").css("color","#D96C29");
   }
   });
});