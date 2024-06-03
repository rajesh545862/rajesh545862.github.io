document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('active');
    this.classList.toggle('open');
});

//---------form pop-up--------//
var popup = document.getElementById("signup-popup");

        // Get the button that opens the popup
        var signupBtn = document.querySelector(".nav-button");

        // Get the <span> element that closes the popup
        var closeBtn = document.getElementsByClassName("close-btn")[0];

        // When the user clicks the button, open the popup
        signupBtn.onclick = function() {
            popup.style.display = "block";
        }

        // When the user clicks on <span> (x), close the popup
        closeBtn.onclick = function() {
            popup.style.display = "none";
        }

        // When the user clicks anywhere outside of the popup, close it
        window.onclick = function(event) {
            if (event.target == popup) {
                popup.style.display = "none";
            }
        }

        //-------------- JavaScript for Carousel------------------//
        let slideIndex = 0;
    const slides = document.querySelectorAll('.image-slide');
    const totalSlides = slides.length;

    const showSlides = () => {
        slideIndex++;
        if (slideIndex >= totalSlides) slideIndex = 0;
        document.querySelector('.image-container').style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    let slideInterval = setInterval(showSlides, 2000);

    const prevSlide = () => {
        clearInterval(slideInterval);
        slideIndex--;
        if (slideIndex < 0) slideIndex = totalSlides - 1;
        document.querySelector('.image-container').style.transform = `translateX(${-slideIndex * 100}%)`;
        slideInterval = setInterval(showSlides, 2000);
    }

    const nextSlide = () => {
        clearInterval(slideInterval);
        showSlides();
        slideInterval = setInterval(showSlides, 2000);
    }


