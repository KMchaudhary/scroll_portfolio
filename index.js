
$abc = "abxc";

const navList = document.querySelectorAll('header .nav-item');

navList.forEach(function(item){

	item.addEventListener('click', function(e){
		
		navList.forEach(function(itemR){
			itemR.classList.remove("active");
		})
		if(e.target == item){
			item.classList.add("active");
		}
	});

});

$window = $(window);
$h2 = document.querySelectorAll('.content h2');
$p = document.querySelectorAll('.content p');
$a = document.querySelectorAll('.content a');

// window.addEventListener('scroll', check_if_in_view);
$window.on('scroll', check_if_in_view);
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($h2, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-viewh2');
    } else {
      $element.removeClass('in-viewh2');
    }
  });
    $.each($p, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-viewp');
    } else {
      $element.removeClass('in-viewp');
    }
  });
      $.each($a, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-viewa');
    } else {
      $element.removeClass('in-viewa');
    }
  });
}




