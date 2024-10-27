document.getElementById("hamburger").addEventListener("click", function() {
    const menu = document.querySelector(".nav-menu");
    menu.classList.toggle("active");
    this.classList.toggle("active"); // Toggle active class on hamburger
});