//First the variables our app is going to use need to be declared

//References to DOM elements
// var window = document.querySelector(window);
// var $document = document.querySelector(document);
//Only links that starts with #navGoNext
var navButtons = document.querySelectorAll("nav a[href^='#']");
var navGoPrev = document.querySelector(".go-prev");
var navGoNext = document.querySelector(".go-next");
var slidesContainer = document.querySelector(".slides-container");
var slides = document.querySelectorAll(".slide");
var currentSlide = slides[0];
var isAnimating = false;
var pageHeight = currentSlide.offsetHeight;

//Animating flag - is our app animating
var isAnimating = false;

//The height of the window
var pageHeight = window.innerHeight;

//Key codes for up and down arrows on keyboard. We'll be using this to navigate change slides using the keyboard
var keyCodes = {
  UP: 38,
  DOWN: 40,
};

//Going to the first slide
goToSlide(currentSlide);

/*
 *   Adding event listeners
 * */

// window.addEventListener("resize", onResize);
// window.dispatchEvent(new Event("resize"));

window.addEventListener("mousewheel", onMouseWheel, { passive: false });
window.addEventListener("DOMMouseScroll", onMouseWheel, { passive: false });

document.addEventListener("keydown", onKeyDown);

// navButtons.addEventListener("click", onNavButtonClick);
navButtons.forEach(function (button) {
  button.addEventListener("click", onNavButtonClick);
});

navGoPrev.addEventListener("click", goToPrevSlide);
navGoNext.addEventListener("click", goToNextSlide);

/*
 *   Internal functions
 * */

/*
 *   When a button is clicked - first get the button href, and then slide to the container, if there's such a container
 * */
function onNavButtonClick(event) {
  //The clicked button
  var button = event.target;
  // The clicked button

  // The slide the button points to
  var slide = document.querySelector(button.getAttribute("href"));

  // If the slide exists, we go to it
  if (slide) {
    goToSlide(slide);
    event.preventDefault();
  }
}

/*
 *   Getting the pressed key. Only if it's up or down arrow, we go to prev or next slide and prevent default behaviour
 *   This way, if there's text input, the user is still able to fill it
 * */
function onKeyDown(event) {
  var PRESSED_KEY = event.keyCode;

  if (PRESSED_KEY == keyCodes.UP) {
    goToPrevSlide();
    event.preventDefault();
  } else if (PRESSED_KEY == keyCodes.DOWN) {
    goToNextSlide();
    event.preventDefault();
  }
}

/*
 *   When user scrolls with the mouse, we have to change slides
 * */
function onMouseWheel(event) {
  //Normalize event wheel delta
  const delta = event.deltaY;

  //If the user scrolled up, it goes to previous slide, otherwise - to next slide
  if (delta > 0) {
    goToNextSlide();
  } else if (delta < 0) {
    goToPrevSlide();
  }

  event.preventDefault();
}

/*
 *   If there's a previous slide, slide to it
 * */
function goToPrevSlide() {
  const prevSlide = currentSlide.previousElementSibling;
  if (prevSlide) {
    goToSlide(currentSlide.previousElementSibling);
  }
}

/*
 *   If there's a next slide, slide to it
 * */
function goToNextSlide() {
  const nextSlide = currentSlide.nextElementSibling;
  if (nextSlide) {
    goToSlide(nextSlide);
  }
}

/*
 *   Actual transition between slides
 * */
function goToSlide(slide) {
  if (!isAnimating && slide) {
    isAnimating = true;
    currentSlide = slide;
    pageHeight = currentSlide.offsetHeight;
    TweenLite.to(slidesContainer, 1, {
      y: pageHeight * Array.from(slides).indexOf(slide),
      onComplete: onSlideChangeEnd,
      onCompleteScope: this,
    });
    TweenLite.to(
      Array.from(navButtons).filter((button) =>
        button.classList.contains("active")
      ),
      0.5,
      { className: "-=active" }
    );
    TweenLite.to(
      Array.from(navButtons).find(
        (button) => button.getAttribute("href") === "#" + slide.id
      ),
      0.5,
      { className: "+=active" }
    );
  }
}

/*
 *   Once the sliding is finished, we need to restore "isAnimating" flag.
 *   You can also do other things in this function, such as changing page title
 * */
function onSlideChangeEnd() {
  isAnimating = false;
}

/*
 *   When user resize it's browser we need to know the new height, so we can properly align the current slide
 * */
function onResize(event) {
  //This will give us the new height of the window
  var newPageHeight = window.innerHeight;

  if (pageHeight !== newPageHeight) {
    pageHeight = newPageHeight;
    //This can be done via CSS only, but fails into some old browsers, so I prefer to set height via JS
    TweenLite.set([slidesContainer, slides], { height: pageHeight + "px" });

    //The current slide should be always on the top
    TweenLite.set(slidesContainer, {
      scrollTo: { y: pageHeight * currentSlide.index() },
    });
  }
}
