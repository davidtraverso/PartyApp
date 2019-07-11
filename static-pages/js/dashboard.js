
$(document).ready(function(){
	
		
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
		