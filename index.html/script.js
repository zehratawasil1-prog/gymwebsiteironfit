// Mobile Navigation
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks")
            .classList.remove("active");

    });

});


// Membership selection
function joinPlan(plan) {

    alert(
        "Great choice! You selected the " +
        plan +
        " membership plan."
    );

}


// Contact form
function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    event.target.reset();

}


// Simple scroll reveal animation
const cards = document.querySelectorAll(
    ".card, .service, .price-card, .trainer"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.7s ease";

    observer.observe(card);

});