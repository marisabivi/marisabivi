var hamburgerToggle = $('#toggle-nav');
var sideNav = $ ('.side-nav');


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

// Hamburger Toggle Animation

$( "#toggle-nav" ).on( "click", function() {
  $( this ).toggleClass( "active" );
  $( this ).blur();
});
