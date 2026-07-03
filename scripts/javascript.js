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


/////  VALIDATION ////////
const form = document.getElementById("contactForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;

    // Καθαρισμός προηγούμενων μηνυμάτων
    document.querySelectorAll(".error").forEach(error => error.textContent = "");
    document.querySelectorAll("input, textarea").forEach(field => field.classList.remove("invalid"));

    // Name
    if (name.value.trim() === "") {
        document.getElementById("nameError").textContent = "Please enter your name.";
        name.classList.add("invalid");
        valid = false;
    }

    // Email
    if (email.value.trim() === "") {
        document.getElementById("emailError").textContent = "Please enter your email.";
        email.classList.add("invalid");
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        email.classList.add("invalid");
        valid = false;
    }

    // Message
    if (message.value.trim() === "") {
        document.getElementById("messageError").textContent = "Please enter your message.";
        message.classList.add("invalid");
        valid = false;
    }

    if (valid) {
        form.submit();
    }

	const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            Accept: "application/json"
        }
    });

    if (response.ok) {

        alert("Your message has been sent successfully!");

        form.reset();   // Καθαρίζει όλα τα πεδία

        // Αν θέλεις refresh:
        // location.reload();

        // Ή αν θέλεις να πας στην αρχή της σελίδας:
        // window.location.href = "index.html";

    } else {

        alert("An error occurred. Please try again.");

    }

});

document.querySelectorAll("input, textarea").forEach(field => {

    field.addEventListener("input", function(){

        this.classList.remove("invalid");

        const error = document.getElementById(this.id + "Error");

        if(error){
            error.textContent = "";
        }

    });

});
