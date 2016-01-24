$(document).ready(function() {
	/**$('.showcase').mouseenter(function () {
		$(this).animate({
			opacity: 0.2
		}, 200);
	});
	$('.showcase').mouseleave(function () {
		$(this).animate({
			opacity: 1
		}, 200);
	});**/
    $('.showcase-two').mouseenter(function(){
        $(this).fadeTo(100, 0.7);
    });
    $('.showcase-two').mouseleave(function(){
        $(this).fadeTo(100, 1);
    });
    $('.subtext').hide();
    $('.col1').mouseenter(function() {
    	$('.col1 .subtext').show();
    });
    $('.col1').mouseleave(function() {
    	$('.col1 .title').show();
    	$('.col1 .subtext').hide();
    });
    $('.col2').mouseenter(function() {
    	$('.col2 .subtext').show();
    });
    $('.col2').mouseleave(function() {
    	$('.col2 .title').show();
    	$('.col2 .subtext').hide();
    });
    $('.col3').mouseenter(function() {
    	$('.col3 .title').hide();
    	$('.col3 .subtext').show();
    });
    $('.col3').mouseleave(function() {
    	$('.col3 .title').show();
    	$('.col3 .subtext').hide();
    });
    $('.col4').mouseenter(function() {
    	$('.col4 .title').hide();
    	$('.col4 .subtext').show();
    });
    $('.col4').mouseleave(function() {
    	$('.col4 .title').show();
    	$('.col4 .subtext').hide();
    });
    $('.col5').mouseenter(function() {
    	$('.col5 .title').hide();
    	$('.col5 .subtext').show();
    });
    $('.col5').mouseleave(function() {
    	$('.col5 .title').show();
    	$('.col5 .subtext').hide();
    });
    $('.col6').mouseenter(function() {
    	$('.col6 .title').hide();
    	$('.col6 .subtext').show();
    });
    $('.col6').mouseleave(function() {
    	$('.col6 .title').show();
    	$('.col6 .subtext').hide();
    });
});