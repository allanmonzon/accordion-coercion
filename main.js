$(document).ready(function() {

	$(".box").on("click", function() {
		$(this).toggleClass("box-show")
		.siblings().removeClass("box-show");
	})
	
})