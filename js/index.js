$(document).ready(function() {
	// $('.stars').hide();
    $('#star1').hide();
    $('#star2').hide();
    $('#star').mouseenter(function() {
        $('#star1').show();
        $('#star2').show();
    });
    $('#star').mouseleave(function() {
        $('.stars').hide();
    });
    $('.showcase-two').mouseenter(function(){
        $(this).fadeTo(100, 0.7);
    });
    $('.showcase-two').mouseleave(function(){
        $(this).fadeTo(100, 1);
    });
    $('.subtext').hide();
    $('.col1').mouseenter(function() {
    	$('.col1 img').hide();
    	$('.col1 .subtext').show();
    });
    $('.col1').mouseleave(function() {
    	$('.col1 img').show();
    	$('.col1 .subtext').hide();
    });
    $('.col2 img').mouseenter(function() {
    	$('.col2 img').animate({
    		opacity:0.6
    	}, 100);
    });
    $('.col2 img').mouseleave(function() {
    	$('.col2 img').animate({
    		opacity: 1
    	}, 100);
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