// JavaScript code to add interactivity

// Form validation
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation
    var nameInput = document.querySelector("input[type='text']");
    var emailInput = document.querySelector("input[type='email']");
    var messageInput = document.querySelector("textarea");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // TODO: Perform further validation, like checking the email format

    // Clear form inputs
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    // TODO: Submit the form data to a server using AJAX or fetch()

    alert("Form submitted successfully!");
});

// Image slider
var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;

    // Reset slide index if it exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}
function scrollToAbout() {
    var aboutSection = document.getElementById("about-me");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}


// TODO: Add more JavaScript code to enhance interactivity, such as scroll animations, dynamic content loading, etc.

  

