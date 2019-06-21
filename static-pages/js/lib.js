
var jqueryLoading = setInterval(function(){ 
    if (typeof(jQuery)=='function'){
		clearInterval(jqueryLoading);


		$(document).ready(function(){
			
			$("header").load("includes/header.html");
			$("nav#sidebar").load("includes/navigation.html", function () {
				
				 $("#sidebar").mCustomScrollbar({
					 theme: "minimal"
				});

				

				$('#sidebarCollapse').on('click', function () {
					// open sidebar
					$('#sidebarCollapse, #sidebar, .navbar-brand').toggleClass('active');
					// fade in the overlay
					$('.overlay').toggleClass('active');
					$('.collapse.in').toggleClass('in');
					$('a[aria-expanded=true]').attr('aria-expanded', 'false');
				});
				
			});
			$("#login").load("includes/login.html");
			$("#slideshow").load("includes/slides.html"); 
			$("footer").load("includes/footer.html");
			$('#page-load').addClass("fadeout");
			$("#page").toggleClass("no-show fadein")
			setTimeout( function(){ $('#page-load').remove()},1000); 
			
			
			
			
		 // Scroll reveal calls
			  window.sr = ScrollReveal();
			  sr.reveal('.img-responsive', {
				duration: 600,
				scale: 0.3,
				distance: '0px'
			  }, 200);
			  sr.reveal('.marketing-header', {
				duration: 1000,
				delay: 200
			  });
			  sr.reveal('.marketing-text', {
				duration: 600,
				scale: 0.3,
				distance: '0px'
			  }, 300);
			
			
			
			//Check to see if the window is top if not then display button
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollToTop').fadeIn();
				} else {
					$('.scrollToTop').fadeOut();
				}
			});

			//Click event to scroll to top
			$('.scrollToTop').click(function(){
				$('html, body').animate({scrollTop : 0},800);
				return false;
			});

		});
		
		
	}
	

}, 500);


