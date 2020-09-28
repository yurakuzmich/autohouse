window.onload = function() {
    const logoImage = document.querySelector('.header_logo img');
console.log(logoImage);
const modalWindow = document.querySelector('.modal-wrap');

    logoImage.addEventListener('click', () => {
        logoImage.classList.toggle('header_logo_bordered');
    });

    window.addEventListener('keydown', (event) => {
        if(event.code === 'Space') {
            event.preventDefault();
            modalWindow.classList.toggle('modal-wrap_shown');
        }
    });
}

