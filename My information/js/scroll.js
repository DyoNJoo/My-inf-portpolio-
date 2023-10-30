const headerE1 = document.querySelector("header");
window.addEventListener('scroll', function() {
    const browerScrollY = window.padeYOffset;
    if (browerScrollY > 0) {
        headerE1.classList.add("active");
    }
    else
    {
        headerE1.classList.remove("active");
    }
});