const rotator = document.querySelector('.rotator');

let i = 0;
function handler() {
    rotator.children[i].classList.remove('rotator__case_active');
    i++;

    if (i > rotator.children.length - 1) {
        i = 0;
    }

    rotator.children[i].classList.add('rotator__case_active');
    rotator.children[i].style.color = rotator.children[i].dataset.color;
}

setInterval(() => handler(), 1000);