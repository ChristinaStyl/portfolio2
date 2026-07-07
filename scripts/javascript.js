// const modal=document.getElementById("pdfModal");
// document.querySelector(".openPdf").onclick=function(e){
// 	console.log('ok');
//     e.preventDefault();
//     modal.style.display="flex";
// }
// document.getElementById("closePdf").onclick=function(){
//     modal.style.display="none";
// }
// modal.onclick=function(e){
//     if(e.target===modal){
//         modal.style.display="none";
//     }
// }
// document.addEventListener("keydown",function(e){
//     if(e.key==="Escape"){
//         modal.style.display="none";
//     }
// });


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
