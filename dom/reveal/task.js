function displayElement() {
    const reveal = document.querySelectorAll('.reveal');

    reveal.forEach(elem => {
        const {top, bottom} = elem.getBoundingClientRect();
        
        (top > 0 && bottom < window.innerHeight) ? elem.classList.add('reveal_active') : elem.classList.remove('reveal_active');
    })
}

setInterval(() => {
    window.addEventListener('scroll', displayElement(this.reveal));
}, 0);
