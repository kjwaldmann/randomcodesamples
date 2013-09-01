// JavaScript Document
    $(document).ready(function(){
		$('.content').hide();
      $('.head').click(function(e){
        e.preventDefault();
        $(this).closest('li').find('.content').slideToggle();

      });
    });
	function expandAll(){
		$('.content').each(function(i, obj) {
 			if($(obj).is(":hidden"))
				{
    				$(obj).slideToggle();
				}
		});
		}
	function collapseAll(){
				$('.content').each(function(i, obj) {
 			if($(obj).is(":visible"))
				{
    				$(obj).slideToggle();
				}
		});
		}
function applyAsdLd(){
$('.content').hide();
$('#ld-asd-app-process').slideDown();
scrollToElement('#aba-application')
	}
	
function applyAba(){
$('.content').hide();
$('#aba-application').slideDown();
scrollToElement('#ma-ld-asd-apply')
	}
	
	
	
function scrollToElement(ele) {
    $(window).scrollTop(ele.offset().top).scrollLeft(ele.offset().left);
}