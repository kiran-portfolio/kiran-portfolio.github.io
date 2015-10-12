$(document).ready(function(){
	$("#workdiv").click(function(){
		$('html,body').animate({
			'scrollTop': $("#toscrollwork").position().top
		});
});
    $("#infodiv").click(function(){
		$('html,body').animate({
			'scrollTop': $("#toscrollinfo").position().top
		});
});
	$("#skilldiv").click(function(){
		$('html,body').animate({
			'scrollTop': $("#toscrollskills").position().top
		});
});
	$("#contactdiv").click(function(){
		$('html,body').animate({
			'scrollTop': $("#toscrollcontact").position().top
		});
});
	$('.carousel').carousel({
        interval: 5000
    });
	});
