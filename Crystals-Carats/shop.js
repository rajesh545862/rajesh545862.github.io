let currentIndex = 0;

function showNextImage() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % items.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showPreviousImage() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 3000);
