// global loadout
// init foundation plugin 
$(document).ready(function() {
	$(document).foundation();
});

// smooth scroll anchor
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top-20
      }, 1000);
      return false;
    }
  }
});

/* END - global loadout */

/* init carousel */
var owl5 = $('.carousel-5');
	owl5.owlCarousel({
	margin: 0,
	navText:['<span class="lnr"></span>','<span class="lnr"></span>'],
	loop: true,
	nav: true,
	dots:false,
	responsive: {
	  0: {
	    items: 1
	  },
	  600: {
	    items: 2
	  },
	  1000: {
	    items: 5
	  }
	}
})
var owlbig = $('.with-carousel .carousel');
  owlbig.owlCarousel({
  margin: 0,
  navText:['<span class="lnr"></span>','<span class="lnr"></span>'],
  loop: true,
  nav: true,
  dots:true,
  items: 1,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true
})
/* END - init carousel */