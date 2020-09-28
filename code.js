window.onload = function() {
    const logoImage = document.querySelector('.header_logo');
console.log(logoImage);

    logoImage.addEventListener('click', () => {
        alert('Logo was clicked');
        console.log('Logo was clicked');
    })
}

