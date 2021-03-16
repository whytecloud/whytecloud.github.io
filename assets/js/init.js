jQuery(document).ready(function($) {
    
    var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({
        handler: function(event, direction) {
		   var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();
			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
            navigation_links.parent().removeClass("current");
	        active_link.parent().addClass("current");
        },
		offset: '35%'

	});

    $('.scroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});