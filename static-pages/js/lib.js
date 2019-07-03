
var jqueryLoading = setInterval(function(){ 
    if (typeof(jQuery)=='function'){
		clearInterval(jqueryLoading);


		$(document).ready(function(){
			
			$("header").load("includes/header.html", function (){
				
				// Activate scrollspy to add active class to navbar items on scroll
			  $('body').scrollspy({
				target: '#mainNav',
				offset: 150
			  });

				// Collapse Navbar
			  var navbarCollapse = function() {
				if ($("#mainNav").offset().top > 300) {
				  $("#mainNav").addClass("navbar-shrink");
				  $("#logo").addClass("navbar-shrink");	
				} else {
				  $("#mainNav").removeClass("navbar-shrink");
				  $("#logo").removeClass("navbar-shrink");
				}
			  };
				// Collapse now if page is not at top
			  navbarCollapse();
			  // Collapse the navbar when page is scrolled
			  $(window).scroll(navbarCollapse);

				
			});
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
				
				$('ul.components li').on('click', function () {
					// open sidebar
					$('#sidebarCollapse, #sidebar, .navbar-brand').toggleClass('active');
					$('.overlay').toggleClass('active');
				});
				
			});
			$("#login").load("includes/login.html");
			$("#slideshow").load("includes/slides.html"); 
			$("footer").load("includes/footer.html");
			$('#page-load').addClass("fadeout");
			$("#page").toggleClass("no-show fadein")
			setTimeout( function(){ $('#page-load').remove()},1000); 
			
			
			// Smooth scrolling using jQuery easing
			  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				  if (target.length) {
					$('html, body').animate({
					  scrollTop: (target.offset().top - 150)
					}, 1000, "easeInOutExpo");
					return false;
				  }
				}
			  });

			
			
			// Vide - Video Background Settings
			  $('body').vide({
				mp4: "assets/video/hero-video.mp4",
				poster: "assets/bridal-party.jpg"
			  }, {
				posterType: 'jpg'
			  });
		
			 
			
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


