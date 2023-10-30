(function () {

    const spanE1 = document.querySelector("main .text-3 span");

    const txtArr = ['Web Publisher', 'Front-End Developer', 'Back-End Developer'];

    let index = 0;

    let currentTxt = txtArr[index].split("");

    function writeTxt() {
        spanE1.textContent += currentTxt.shift();

        if (currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        }
        else {
            currentTxt = spanE1.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }

    function deleteTxt() {
        currentTxt.pop();
        spanE1.textContent = currentTxt.join("");

        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        }
        else {
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            console.log(currentTxt);
            writeTxt();
        }
    }
    writeTxt();
})();