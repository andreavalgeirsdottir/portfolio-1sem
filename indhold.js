window.addEventListener("load", showSlides);

let slideIndex = 0;

function showSlides() {
    console.log("showSlides");
    let i;

    let slides = document.querySelectorAll(".slideshow");

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("hide");
    }

    slideIndex++;


    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].classList.remove("hide");
    setTimeout(showSlides, 2500);
}
