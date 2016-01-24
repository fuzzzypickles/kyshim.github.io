$(document).ready(function() {
	$('.showcase').mouseenter(function () {
		$(this).animate({
			opacity: 0.2
		}, 200);
	});
	$('.showcase').mouseleave(function () {
		$(this).animate({
			opacity: 1
		}, 200);
	});
    $('.showcase-two').mouseenter(function(){
        $(this).fadeTo(100, 0.7);
    });
    $('.showcase-two').mouseleave(function(){
        $(this).fadeTo(100, 1);
    })
});