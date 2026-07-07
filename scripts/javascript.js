$(document).ready(function() {
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

const modal = document.getElementById("sparks_image");
const btn = document.getElementById("sparks_presentation");
const close = document.querySelector(".close-btn");

btn.onclick = () => {
    modal.style.display = "flex";
};

close.onclick = () => {
    modal.style.display = "none";
};

modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

const modal2 = document.getElementById("luna_image");
const btn2 = document.getElementById("luna_presentation");
const close2 = document.querySelector(".close-btn2");

btn2.onclick = () => {
    modal2.style.display = "flex";
};

close2.onclick = () => {
    modal2.style.display = "none";
};

modal2.onclick = (e) => {
    if (e.target === modal2) {
        modal2.style.display = "none";
    }
};

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        modal.style.display = "none";
    }
});
