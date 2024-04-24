const rotatorCases = document.querySelectorAll('.rotator__case ');
let count = 0;

function changeRotatorCases() {

    rotatorCases.forEach((elem, index) => {
        (count === index) ? elem.classList.add('rotator__case_active') : elem.classList.remove('rotator__case_active');
    })
    count++;
    if (count >= rotatorCases.length) {
        count = 0;
    }
}

setInterval(changeRotatorCases, 1000);
