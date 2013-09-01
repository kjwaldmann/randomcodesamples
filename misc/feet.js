// JavaScript Document

// JavaScript Document
$( document ).ready(function() {

	
	
$(".walkingFeet").css("visibility","hidden");
$(window).scroll(function() {
 if($(window).scrollTop() >= 4300) {
//foot1
$(".walkingFeet").css("visibility","hidden");
$("#foot1").css("visibility","visible");
   }
   
    if($(window).scrollTop() >= 4425) {
//foot2
$(".walkingFeet").css("visibility","hidden");
$("#foot2").css("visibility","visible");
   }
   
    if($(window).scrollTop() >= 4550) {
//foot3
$(".walkingFeet").css("visibility","hidden");
$("#foot4").css("visibility","visible");
   }
    if($(window).scrollTop() >= 4675) {
//foot4
$(".walkingFeet").css("visibility","hidden");
$("#foot3").css("visibility","visible");
   }
    if($(window).scrollTop() >= 4800) {
//foot5
$(".walkingFeet").css("visibility","hidden");
$("#foot6").css("visibility","visible");
   }
    if($(window).scrollTop() >= 4925) {
//foot6
$(".walkingFeet").css("visibility","hidden");
$("#foot5").css("visibility","visible");
   }
    if($(window).scrollTop() >= 5050) {
//foot7
$(".walkingFeet").css("visibility","hidden");
$("#foot8").css("visibility","visible");
   }
    if($(window).scrollTop() >= 5175) {
//foot8
$(".walkingFeet").css("visibility","hidden");
$("#foot7").css("visibility","visible");
   }
   
   
   });
});

