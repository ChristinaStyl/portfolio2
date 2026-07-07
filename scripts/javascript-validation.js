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

window.addEventListener("pageshow", function () {
    const navigation = performance.getEntriesByType("navigation");

    if (navigation.length && navigation[0].type === "back_forward") {
        window.location.reload();
    }
});
