export function slideshowPrev(manual, auto) {
  let prevSlide = activeSlide.value - 1;
  if (prevSlide < 0) {
    prevSlide = slides.value.length - 1;
  }
  slideshowSwitch(prevSlide, auto);
}
export function slideshowNext(manual, auto) {
  let nextSlide = activeSlide.value + 1;
  if (nextSlide > slides.value.length - 1) {
    nextSlide = 0;
  }
  slideshowSwitch(nextSlide, auto);
}
export function slideshowSwitch(slideshow, index, auto) {
  if (wait.value) return;

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
