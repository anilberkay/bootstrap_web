$(document).ready(function(){
	$('#date, #date_off, #pick_up').datepicker({});
	
	$(window).scroll(function(){
		$('.sec2 .sec3 , .sec4 , .sec5 , .sec6 , .sec7 , footer').each(function(){
			var top = $(this).offset().top;
			var windows_bottom = $(window).scrollTop()+$(window).height();
			if(windows_bottom > top){
				$(this).animate({'opacity':'1'},1000);
			}
		})
	})
});
