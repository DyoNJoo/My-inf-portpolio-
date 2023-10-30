const headerE1 = document.querySelector("header");
window.addEventListener('scroll', function() {
    this.requestAnimationFrame(scrollCheck);
});

function scrollCheck() {
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;

    if (browerScrollY > 0) {
        headerE1.classList.add("active");
    }
    else {
        headerE1.classList.remove("active");
    }
}