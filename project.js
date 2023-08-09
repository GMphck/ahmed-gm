
// This function returns whoever clicks on the home button link to the home page
// function goToHomePage()
// {
//     window.location.href = "https://google.com/";
// }

// It is a function used to switch the visibility of the navigation menu
//  and to change the icon displayed
//   when the menu is open or closed.

// Build quick site navigation.
// Global variables

const sections = document.querySelectorAll("section");

// Function to scroll to a specific section
function scrollToSection(section) {
    section.scrollIntoView({ behavior: "smooth" });
}

// Add event listeners to each section
sections.forEach((section) => {
    const sectionTitle = section.getAttribute("data-nav");
    section.addEventListener("click", () => {
        scrollToSection(section);
    });
});

// Send email for form
document.getElementById('emailForm').addEventListener('submit', function(event) 
{
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        to_email: 'gm-btc@hotmail.com', // Replace with the recipient's email address
        from_email: email,
        name: name,
        phone: phone,
        message: message
    };

    // Send email using EmailJS
    emailjs.send('service_ir6qt4v', 'template_4k4od24', templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response);
        }, function(error) {
            console.log('Failed to send email.', error);
        });

        document.getElementById('emailForm').reset();   
});

// This function returns whoever clicks on the home button link to the home page
// function goToHomePage()
// {
//     window.location.href = "https://google.com/";
// }

// It is a function used to switch the visibility of the navigation menu
//  and to change the icon displayed
//   when the menu is open or closed.

function myFunction() {
    var x = document.getElementById("myTop");
    var icon = x.querySelector(".icon");
    var links = x.querySelectorAll(".nav-links");
    
    x.classList.toggle("responsive");
    
    if (x.classList.contains("responsive")) {
        icon.innerHTML = '<i class="fa-solid fa-times"></i>';
        
        links.forEach(function(link) {
            link.style.display = "block";
        });
    } else {
        icon.innerHTML = '<i class="fa-solid fa-bars"></i>';
        
        links.forEach(function(link) {
            link.style.display = "none";
        });
    }
}



function displayMessage()
{
    alert("Coming soon!");
}

