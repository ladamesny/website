/* 	------------------------- 
        
        Author: Larry Adames
        Description: Ruby on Rails FullStack Developer
        Year: 2015

------------------------- */

$(document).ready(function () {

	// Smooth Wheel
	$("body").smoothWheel();

	// Stop resize div #intro on mobile devices
	if($(window).width() < 750) {
		$('#intro').css('height', ($(window).height() + 60) +'px');
	}
	var height = $(window).height() + 60;
	$(window).resize(function(){
		if($(window).width() < 750) {
	        $('#intro').css('height', height +'px');
		} else {
			$("#intro").removeAttr("style");
		}
	});

	// WOW initizalition
	var wow = new WOW({
    	mobile: false
    });
	wow.init();

	// ScrollIt configuration
	$(function () {
		$.scrollIt({
			// The easing function for animation
			easing: 'linear',
			// How long (in ms) the animation takes
			scrollTime: 500
		});
	});

	// Modernizr to handle touch event on images.
	if (Modernizr.touch) {
		// Show the close overlay button
		$(".close-overlay").removeClass("hidden");
		// Handle the adding of hover class when clicked
		$(".img").click(function (e) {
			if (!$(this).hasClass("hover")) {
				$(this).addClass("hover");
			}
		});
		// Handle the closing of the overlay
		$(".close-overlay").click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			if ($(this).closest(".img").hasClass("hover")) {
				$(this).closest(".img").removeClass("hover");
			}
		});
	} else {
		// Handle the mouseenter functionality
		$(".img").mouseenter(function () {
			$(this).addClass("hover");
		})
				// Handle the mouseleave functionality
				.mouseleave(function () {
					$(this).removeClass("hover");
				});
	}

	// Email submission
	$('#formContact').submit(function(event) {
        event.preventDefault();
        var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'subject': $('input[name=subject]').val(),
            'message': $('textarea[name=message]').val()
        };
        $.ajax({
            type: 'POST',
            url: 'contact.php',
            data: formData,
            dataType: 'html',
            encode: true,
            success: function(data) {
                document.getElementById("submit").innerHTML = data;
            }
        });
        document.getElementById("submit").disabled = "true";
    });

	// Scroll Top
    $('#scrollTop').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

});