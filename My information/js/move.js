const animationMove = function(selector) {
    const targetEl = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;

    window.scrollTo({top : targetScrollY, behavior: 'smooth'});
}

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");

for (let i = 0; i < scrollMoveEl.length; i++) {
    scrollMoveEl[i].addEventListener('click', function(e) {
        const target = this.dataset.target;
        animationMove(target);
    });
}