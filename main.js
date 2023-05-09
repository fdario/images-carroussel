const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const checkedRadio = document.getElementsByName('slide');

let i = 2;

previousButton.addEventListener('click', previousimg)

function previousimg(e) {
    i--;
    switch (i) {
        case 3:
            e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.checked = true;
            break;
        case 2:
            e.target.nextElementSibling.nextElementSibling.nextElementSibling.checked = true;
            break;
        case 1:
            e.target.nextElementSibling.nextElementSibling.checked = true;
            break;
        case 0:
            e.target.nextElementSibling.checked = true;
            break;
    }
    if (i < 0) {
        i = 0;
    } else {
        return i;
    }
};
nextButton.addEventListener('click', (e) => {
    i++;
    switch (i) {
        case 4:
            e.target.previousElementSibling.checked = true;
            break;
        case 3:
            e.target.previousElementSibling.previousElementSibling.checked = true;
            break;
        case 2:
            e.target.previousElementSibling.previousElementSibling.previousElementSibling.checked = true;
            break;
        case 1:
            e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.checked = true;
            break;
        case 0:
            break;
    }
    if (i > 4) {
        i = 4;
    } else {
        return i;
    }
});