const buttons = document.querySelectorAll('.font-size');
const font = document.getElementById('book');

buttons.forEach((button, i) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        buttons.forEach(button => button.classList.remove('font-size_active'));
        button.classList.add('font-size_active')
        
        switch (buttons[i].classList.contains('font-size_active')) {
            case i === 0:
                font.classList.add('book_fs-small');
                font.classList.remove('book_fs-big');
                break;
            case i === 2:
                font.classList.add('book_fs-big');
                font.classList.remove('book_fs-small');
                break;
            default:
                font.classList.remove('book_fs-small', 'book_fs-big');
        }
    })
})
