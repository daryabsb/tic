import { ref } from "vue"
export function slideshowPrev(manual, auto) {
    let prevSlide = activeSlide.value - 1;
    if (prevSlide < 0) {
        prevSlide = slides.value.length - 1;
    }
    slideshowSwitch(prevSlide, auto);
}
export function slideshowNext(slideshow, slides, previous, auto) {
    // const slides = slideshow.value.querySelectorAll('.slide');
    const activeSlide = slides.value.querySelector('.is-active');
    let newSlide = ref(null);

    if (previous) {
        newSlide = activeSlide.previousElementSibling;
        if (!newSlide) {
            newSlide = slides[slides.length - 1];
        }
    } else {
        newSlide = activeSlide.nextElementSibling;
        if (!newSlide) {
            newSlide = slides[0];
        }
    }
    slideshowSwitch(slides, Array.from(slides).indexOf(newSlide), auto);
}

export function slideshowSwitch(slideshow, index, auto) {
    console.log('reached 2');
    console.log(slideshow.value.className('.pagination'));
    if (slideshow.value.wait) return;

    activeSlide.value = index;
    const activeSlideImage = slides.value[activeSlide.value].querySelector(
        ".image-container"
    );
    const newSlide = slides.value[index];
    const newSlideImage = newSlide.querySelector(".image-container");
    const newSlideContent = newSlide.querySelector(".slide-content");
    const newSlideElements = newSlide.querySelectorAll(".caption > *");

    if (newSlide === activeSlide.value) return;

    newSlide.classList.add("is-new");
    clearTimeout(timeout.value);
    wait.value = true;

    if (transition.value === "fade") {
        newSlide.style.display = "block";
        newSlide.style.zIndex = "2";
        newSlideImage.style.opacity = "0";

        setTimeout(() => {
            newSlide.classList.add("is-active");
            newSlide.classList.remove("is-new");
            activeSlide.value.classList.remove("is-active");
            newSlide.style.display = "";
            newSlide.style.zIndex = "";
            newSlideImage.style.opacity = "";
            pages.value.forEach((page) => {
                page.classList.remove("is-active");
            });
            pages.value[index].classList.add("is-active");
            wait.value = false;
            if (auto) {
                timeout.value = setTimeout(() => {
                    slideshowNext(false, true);
                }, slideshowDuration);
            }
        }, 1000);
    } else {
        // slide transition logic here
    }
}

export function homeSlideshowParallax() {
    var scrollTop = window.pageYOffset;
    if (scrollTop > window.innerHeight) return;
    var inner = document.querySelector('.slideshow-inner');
    var newHeight = window.innerHeight - (scrollTop / 2);
    var newTop = scrollTop * 0.8;

    inner.style.transform = 'translateY(' + newTop + 'px)';
    inner.style.height = newHeight + 'px';
}