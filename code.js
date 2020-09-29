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


    const allImages = document.querySelectorAll('.slider-body img');
    let currentImage = 0;
    allImages[0].style.width = '100%';


    const leftButton = document.querySelector('.slider-leftarrow');
    leftButton.addEventListener('click', () => {
        // leftClick(currentImage, imagesCount, allImages);
        console.log('Листаем влево');
        if(currentImage > 0) {
            allImages[currentImage].style.width = 0;
            allImages[currentImage - 1].style.width = '100%';
            currentImage -= 1;
            console.log(currentImage);
        } else {
            allImages[currentImage].style.width = 0;
            currentImage = allImages.length - 1;
            allImages[currentImage].style.width = '100%';
        }
        return currentImage;
    });

    const rightButton = document.querySelector('.slider-rightarrow');
    rightButton.addEventListener('click', () => {
        // rightClick(currentImage);
        console.log('Листаем вправо');
        if(currentImage < (allImages.length - 1)) {
            allImages[currentImage].style.width = 0;
            allImages[currentImage + 1].style.width = '100%';
            currentImage += 1;
            console.log(currentImage);
        } else {
            allImages[currentImage].style.width = 0;
            currentImage = 0;
            allImages[currentImage].style.width = '100%';
        }
        return currentImage;        
    });

}

