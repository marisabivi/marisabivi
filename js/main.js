var hamburgerToggle = $('#toggle-nav');
var sideNav = $ ('.side-nav');
var $btnShowHide = $('.showhide');

//lightbox
function slideonlyone(thechosenone) {
     $('.newboxes2').each(function(index) {
          if ($(this).attr("id") == thechosenone) {
               $(this).slideDown(200);
          }
          else {
               $(this).slideUp(600);
          }
     });
}
//$(document).ready(function(){
  //$("#panel").click(function(){
    //$("#flip").slideToggle("slow");
  //});
//});

//smoothscroll
//$('.fixednav').localScroll({
  //target:'body'
//});

var hashTagActive = "";
$(document).ready( function() {
	$(".smooth-scroll a").click(function (event) {

		if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
			event.preventDefault();

			//calculate destination place
			var dest = 0;
			if ( $(this.hash).offset().top > $(document).height() - $(window).height() ) {
				dest = $(document).height() - $(window).height();
			}
			else {
				dest = $(this.hash).offset().top;
			}

			//go to destination
			$('html, body').animate({
			    scrollTop: dest
			}, 700, 'swing');

			hashTagActive = this.hash;
		}

	});
});

// Hamburger Toggle Animation

var sideNavClickHandler = function (e) {
	var isActive = sideNav.attr('data-state');
	e.preventDefault ();

	if (isActive == 'active') {
		sideNav.attr('data-state','inactive');
	} else {
		sideNav.attr('data-state','active');
	}
};

hamburgerToggle.on('click', sideNavClickHandler);

var sideNavItemClick = function () {
	var isActive = sideNav.attr('data-state');

	if (isActive == 'active') {
		sideNav.attr('data-state','inactive');
	} else {
		sideNav.attr('data-state','active');
	}
};

$( "#toggle-nav" ).on( "click", function() {
  $( this ).toggleClass( "active" );
  $( this ).blur();
});
