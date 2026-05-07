$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();

	$(window).scroll(function() {
		var windowScroll = $(this).scrollTop();
		if ($(this).scrollTop() > 160) {
			$('#scroll-top').fadeIn();
			$('#main').addClass('scrolled');
		} else {
			$('#scroll-top').fadeOut();
			$('#main').removeClass('scrolled');
		}

		//** dot menu
		$( ".dot-menu-wrap" ).each(function( index ) {
			var wrapid = $(this).attr('id');
			var elemPos = $( this ).position().top;
			if(windowScroll > elemPos-30){
				$('.dot-menu-item-link').removeClass('selected');
				$('#dmi-'+wrapid).addClass('selected');
			}
		});
	});
});

function openInfo(evt, infoName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(infoName).style.display = "block";
  evt.currentTarget.className += " active";
}
