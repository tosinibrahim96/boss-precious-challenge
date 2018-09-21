let slideIndex1 = 1;
const slideId = ["mySlides2"];
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");


//automatic slideshow
let slideIndex = 0;
showFirstSlide = () => {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showFirstSlide, 5000); // Change image every 5 seconds
}
showFirstSlide();
//end of automatic slide show


//deeper life slideshow
prev[0].addEventListener("click", () => {
    plusSlides(-1)
});

next[0].addEventListener("click", () => {
    plusSlides(1)
});

plusSlides = (n) => {
    showSecondSlide(slideIndex1 += n);
}

showSecondSlide = (n) => {
    let i;
    const x = document.getElementsByClassName(slideId[0]);
    if (n > x.length) {
        slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex1 - 1].style.display = "block";
}
showSecondSlide(1);
//end of deeperlife slide





//alter automatic slides by clicking
dots[0].addEventListener("click", () => {
    currentSlide(1);
});

dots[1].addEventListener("click", () => {
    currentSlide(2);
});

dots[2].addEventListener("click", () => {
    currentSlide(3);
});


currentSlide = (n) => {
    showClickedSlide(slideIndex = n);
}

showClickedSlide = (n) => {
    let i;

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//end of automatic slide click event