$(document).ready(function() {

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu, .menu_item").click(function() {
  	$(".sandwich").toggleClass("active");
	});
	
	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

});
$(window).load(function() { 
	 $(".loader_inner").fadeOut(); 
	 $(".loader").delay(400).fadeOut("slow"); 
});